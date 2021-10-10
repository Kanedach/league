import { QueueName } from './queue-name';

const qn = new QueueName();

describe('QueueName', () => {
  it('5v5 Ranked Solo games', () => {
    expect(qn.queueName(420)).toStrictEqual({
      queueDescription: '5v5 Ranked Solo games',
      queueMap: "Summoner's Rift",
    });
  });
  it('5v5 ARAM games', () => {
    expect(qn.queueName(450)).toStrictEqual({
      queueDescription: '5v5 ARAM games',
      queueMap: 'Howling Abyss',
    });
  });
  it('5v5 Draft Pick game', () => {
    expect(qn.queueName(400)).toStrictEqual({
      queueDescription: '5v5 Draft Pick games',
      queueMap: "Summoner's Rift",
    });
  });
  it('5v5 Ranked Flex games', () => {
    expect(qn.queueName(440)).toStrictEqual({
      queueDescription: '5v5 Ranked Flex games',
      queueMap: "Summoner's Rift",
    });
  });
});
