import json from './parser.js';
import read from './reader.js';
import GameSaving from './gamesaving.js';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);

    return new GameSaving(JSON.parse(value));
  }
}
