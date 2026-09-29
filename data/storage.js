import {
  COMPLETION_MAX,
  COMPLETION_MIN,
  GAME_STATUSES,
  OWNERSHIP_TYPES,
} from './game-record.js';

export const STORAGE_KEY = 'vgc-library-state';
export const STORAGE_VERSION = 1;

const SAVED_GAME_FIELDS = [
  'status',
  'favorite',
  'owned',
  'platformOwnership',
  'platforms',
  'completionPercentage',
];

export function createStorageSnapshot(state) {
  const games = Object.fromEntries(
    state.items.map((game) => [
      game.id,
      {
        status: game.status,
        favorite: game.favorite,
        owned: game.owned,
        platformOwnership: Object.fromEntries(
          Object.entries(game.platformOwnership).map(([platform, ownershipTypes]) => [
            platform,
            [...ownershipTypes],
          ]),
        ),
        platforms: [...game.platforms],
        completionPercentage: game.completionPercentage,
      },
    ]),
  );

  return {
    version: STORAGE_VERSION,
    viewPreference: state.viewPreference,
    games,
  };
}

export function validateStorageSnapshot(snapshot, knownGameIds = []) {
  const errors = [];

  if (!snapshot || snapshot.version !== STORAGE_VERSION) {
    errors.push('Storage version is not supported.');
  }

  if (!snapshot || !['card', 'list'].includes(snapshot.viewPreference)) {
    errors.push('Storage view preference is invalid.');
  }

  if (!snapshot || !snapshot.games || Array.isArray(snapshot.games) || typeof snapshot.games !== 'object') {
    errors.push('Storage game data is invalid.');
    return { valid: false, errors };
  }

  Object.entries(snapshot.games).forEach(([gameId, savedGame]) => {
    if (knownGameIds.length > 0 && !knownGameIds.includes(gameId)) {
      errors.push(`Storage contains an unknown game: ${gameId}.`);
    }

    if (!savedGame || typeof savedGame !== 'object' || Array.isArray(savedGame)) {
      errors.push(`Storage data for ${gameId} is invalid.`);
      return;
    }

    SAVED_GAME_FIELDS.forEach((fieldName) => {
      if (!Object.hasOwn(savedGame, fieldName)) {
        errors.push(`Storage data for ${gameId} is missing ${fieldName}.`);
      }
    });

    if (!GAME_STATUSES.includes(savedGame.status)) {
      errors.push(`Storage data for ${gameId} has an unsupported status.`);
    }
    if (typeof savedGame.favorite !== 'boolean' || typeof savedGame.owned !== 'boolean') {
      errors.push(`Storage data for ${gameId} has invalid boolean values.`);
    }
    if (!Array.isArray(savedGame.platforms) || savedGame.platforms.some((platform) => typeof platform !== 'string')) {
      errors.push(`Storage data for ${gameId} has invalid platforms.`);
    }
    if (savedGame.owned) {
      if (savedGame.platforms.length === 0) {
        errors.push(`Storage data for ${gameId} needs an owned platform.`);
      }
      if (!savedGame.platformOwnership || typeof savedGame.platformOwnership !== 'object') {
        errors.push(`Storage data for ${gameId} has invalid platform ownership.`);
      } else {
        savedGame.platforms.forEach((platform) => {
          const ownershipTypes = savedGame.platformOwnership[platform];
          if (
            !Array.isArray(ownershipTypes) ||
            ownershipTypes.length === 0 ||
            ownershipTypes.some((ownershipType) => !OWNERSHIP_TYPES.includes(ownershipType))
          ) {
            errors.push(`Storage data for ${gameId} has invalid ownership types for ${platform}.`);
          }
        });
      }
    } else if (
      !savedGame.platformOwnership ||
      Object.keys(savedGame.platformOwnership).length > 0 ||
      savedGame.platforms.length > 0
    ) {
      errors.push(`Storage data for unowned ${gameId} contains owned details.`);
    }
    if (
      savedGame.completionPercentage !== null &&
      (!Number.isInteger(savedGame.completionPercentage) ||
        savedGame.completionPercentage < COMPLETION_MIN ||
        savedGame.completionPercentage > COMPLETION_MAX)
    ) {
      errors.push(`Storage data for ${gameId} has an invalid completion percentage.`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

export function loadStorageSnapshot(state, rawValue, knownGameIds) {
  if (!rawValue) {
    return { loaded: false, errors: [] };
  }

  let snapshot;

  try {
    snapshot = JSON.parse(rawValue);
  } catch {
    return { loaded: false, errors: ['Storage data is not valid JSON.'] };
  }

  const validation = validateStorageSnapshot(snapshot, knownGameIds);

  if (!validation.valid) {
    return { loaded: false, errors: validation.errors };
  }

  state.viewPreference = snapshot.viewPreference;

  state.items.forEach((game) => {
    const savedGame = snapshot.games[game.id];

    if (savedGame) {
      state.updateGame(game.id, {
        status: savedGame.status,
        favorite: savedGame.favorite,
        owned: savedGame.owned,
        platformOwnership: Object.fromEntries(
          Object.entries(savedGame.platformOwnership).map(([platform, ownershipTypes]) => [
            platform,
            [...ownershipTypes],
          ]),
        ),
        platforms: [...savedGame.platforms],
        completionPercentage: savedGame.completionPercentage,
      });
    }
  });

  return { loaded: true, errors: [] };
}

export function saveStorageSnapshot(state, storage = globalThis.localStorage) {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(createStorageSnapshot(state)));
    return { saved: true, error: '' };
  } catch {
    return { saved: false, error: 'Browser storage is unavailable.' };
  }
}
