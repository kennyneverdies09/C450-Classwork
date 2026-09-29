export const GAME_STATUSES = [
  'Want to Play',
  'Not Started',
  'Playing',
  'Completed',
  'No Longer Interested',
];

export const OWNERSHIP_TYPES = ['Physical', 'Digital'];
export const COMPLETION_MIN = 0;
export const COMPLETION_MAX = 100;

export const REQUIRED_GAME_FIELDS = [
  'id',
  'title',
  'coverImage',
  'description',
  'genre',
  'releaseYear',
  'releaseDate',
  'releasePlatforms',
  'owned',
  'platformOwnership',
  'platforms',
  'status',
  'favorite',
  'completionPercentage',
];

export function createGameRecord({
  id = '',
  title = '',
  coverImage = '',
  description = '',
  genre = '',
  releaseYear = null,
  releaseDate = null,
  releasePlatforms = [],
  owned = false,
  platformOwnership = {},
  platforms = [],
  status = 'Want to Play',
  favorite = false,
  completionPercentage = null,
} = {}) {
  return {
    id,
    title,
    coverImage,
    description,
    genre,
    releaseYear,
    releaseDate,
    releasePlatforms: [...releasePlatforms],
    owned,
    platformOwnership: { ...platformOwnership },
    platforms: [...platforms],
    status,
    favorite,
    completionPercentage,
  };
}

export function validateGameRecords(records) {
  const errors = [];
  const ids = new Set();

  records.forEach((record, recordIndex) => {
    REQUIRED_GAME_FIELDS.forEach((fieldName) => {
      if (!Object.hasOwn(record, fieldName)) {
        errors.push(`Record ${recordIndex + 1} is missing ${fieldName}.`);
      }
    });

    if (!record.id || ids.has(record.id)) {
      errors.push(`Record ${recordIndex + 1} has a missing or duplicate ID.`);
    }
    ids.add(record.id);

    ['title', 'coverImage', 'description', 'genre', 'releaseDate'].forEach((fieldName) => {
      if (!record[fieldName]) {
        errors.push(`Record ${recordIndex + 1} has an empty ${fieldName}.`);
      }
    });

    if (!GAME_STATUSES.includes(record.status)) {
      errors.push(`Record ${recordIndex + 1} has an unsupported status.`);
    }

    if (!Array.isArray(record.releasePlatforms)) {
      errors.push(`Record ${recordIndex + 1} has invalid release platforms.`);
    }

    if (record.owned) {
      if (!Array.isArray(record.platforms) || record.platforms.length === 0) {
        errors.push(`Record ${recordIndex + 1} needs at least one owned platform.`);
      }
      if (!record.platformOwnership || typeof record.platformOwnership !== 'object') {
        errors.push(`Record ${recordIndex + 1} has invalid platform ownership.`);
      } else {
        record.platforms.forEach((platform) => {
          const ownershipTypes = record.platformOwnership[platform];
          if (
            !Array.isArray(ownershipTypes) ||
            ownershipTypes.length === 0 ||
            ownershipTypes.some((ownershipType) => !OWNERSHIP_TYPES.includes(ownershipType))
          ) {
            errors.push(`Record ${recordIndex + 1} has invalid ownership types for ${platform}.`);
          }
        });
      }
    } else if (
      !record.platformOwnership ||
      Object.keys(record.platformOwnership).length > 0
    ) {
      errors.push(`Record ${recordIndex + 1} has ownership details while unowned.`);
    }

    if (
      record.completionPercentage !== null &&
      (!Number.isInteger(record.completionPercentage) ||
        record.completionPercentage < COMPLETION_MIN ||
        record.completionPercentage > COMPLETION_MAX)
    ) {
      errors.push(`Record ${recordIndex + 1} has an invalid completion percentage.`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}
