import json from './parser.js';
import read from './reader.js';
import GameSaving from './gamesaving.js';

let gameSav = new GameSaving();

const gameSavLoad = (async () => {
  try {
    const readResolve = await read();
    const saving = await json(readResolve);
    gameSav = JSON.parse(saving);
    return gameSav;
  } catch (error) {
    throw new Error('Oops!');
  }
})();

export default gameSavLoad;
