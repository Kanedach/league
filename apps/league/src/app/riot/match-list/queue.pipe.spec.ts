import { QueuePipe } from './queue.pipe';

const pipe = new QueuePipe();

describe('QueuePipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
