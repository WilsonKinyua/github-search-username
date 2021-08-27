import { CapitalizeSentencePipe } from './capitalize-sentence.pipe';

describe('CapitalizeSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
