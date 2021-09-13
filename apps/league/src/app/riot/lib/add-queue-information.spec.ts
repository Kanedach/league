import {AddQueueInformation} from './add-queue-information';

const matches = [
  {
    "platformId": "EUW1",
    "gameId": 5394285157,
    "champion": 141,
    "queue": 450,
    "season": 13,
    "timestamp": 1627810303538,
    "role": "DUO_SUPPORT",
    "lane": "TOP"
  },
  {
    "platformId": "EUW1",
    "gameId": 5393567423,
    "champion": 113,
    "queue": 400,
    "season": 13,
    "timestamp": 1627755298629,
    "role": "NONE",
    "lane": "JUNGLE"
  },
  {
    "platformId": "EUW1",
    "gameId": 5393534234,
    "champion": 113,
    "queue": 420,
    "season": 13,
    "timestamp": 1627753403088,
    "role": "NONE",
    "lane": "JUNGLE"
  }];
const addQueueInformation = new AddQueueInformation();

describe('AddQueueInformation', () => {
  it('test', () => {
    expect(addQueueInformation.addQue(matches)).toStrictEqual([
      {
        "platformId": "EUW1",
        "gameId": 5394285157,
        "champion": 141,
        "queue": 450,
        "queueInformation": {
          "queueDescription": "5v5 ARAM games",
          "queueMap": "Howling Abyss",
        },
        "season": 13,
        "timestamp": 1627810303538,
        "role": "DUO_SUPPORT",
        "lane": "TOP"
      },
      {
        "platformId": "EUW1",
        "gameId": 5393567423,
        "champion": 113,
        "queue": 400,
        "queueInformation": {
          "queueDescription": "5v5 Draft Pick games",
          "queueMap": "Summoner's Rift",
        },
        "season": 13,
        "timestamp": 1627755298629,
        "role": "NONE",
        "lane": "JUNGLE"
      },
      {
        "platformId": "EUW1",
        "gameId": 5393534234,
        "champion": 113,
        "queue": 420,
        "queueInformation": {
          "queueDescription": "5v5 Ranked Solo games",
          "queueMap": "Summoner's Rift",
        },
        "season": 13,
        "timestamp": 1627753403088,
        "role": "NONE",
        "lane": "JUNGLE"
      }])
  })
});
