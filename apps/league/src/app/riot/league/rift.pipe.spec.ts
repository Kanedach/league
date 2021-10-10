import { RiftPipe } from './rift.pipe';

describe('RiftPipe', () => {
  const pipe = new RiftPipe();

  it('RANKED_SOLO_5x5 to Ranked Solo/Duo', () => {
    expect(pipe.transform('RANKED_SOLO_5x5')).toBe('Ranked Solo/Duo');
  });

  it('RANKED_FLEX_SR to Ranked Flex', () => {
    expect(pipe.transform('RANKED_FLEX_SR')).toBe('Ranked Flex');
  });

  it('Default', () => {
    expect(pipe.transform('Normal')).toBe('Normal');
  });
});
