const GAME_ART = {
  minecraft: { icon: '🎮', caption: 'Controller has entered sleep mode' },
  'stardew-valley': { icon: '🌱', caption: 'Farm currently accepting snacks' },
  'breath-of-the-wild': { icon: '🗺️', caption: 'Map folded itself again' },
  'mario-kart-8-deluxe': { icon: '🏎️', caption: 'Race starts after one more snack' },
  hades: { icon: '🔥', caption: 'Underworld queue: very long' },
  'hollow-knight': { icon: '🐛', caption: 'Small knight, large to-do list' },
  'animal-crossing-new-horizons': { icon: '🏝️', caption: 'Island meeting postponed' },
  'portal-2': { icon: '🌀', caption: 'Portal misplaced, please retry' },
  celeste: { icon: '🏔️', caption: 'Mountain says try again' },
  'elden-ring': { icon: '🛡️', caption: 'Hero forgot the quest log' },
  'the-witcher-3': { icon: '🐺', caption: 'Monster contract needs coffee' },
  'grand-theft-auto-vi': { icon: '🚧', caption: 'Release date is still planning' },
};

export function getGameArt(gameId) {
  return GAME_ART[gameId] || { icon: '🎮', caption: 'Placeholder art loading' };
}
