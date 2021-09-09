import { QueuePipe } from './queue.pipe';
import {before} from "@nrwl/node/src/utils/__mocks__/plugin-a";

const pipe = new QueuePipe();

describe('QueuePipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
