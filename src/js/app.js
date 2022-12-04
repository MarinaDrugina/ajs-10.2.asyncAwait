import GameSavingLoader from './gamesavingloader.js';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    console.log(saving);
  } catch (error) {
    throw new Error('Oops!');
  }
})();
