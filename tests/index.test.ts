import {createLinearScale, getLinearDomainRange} from '../src';

describe('Test domain helpers', () => {
  test('The getLinearDomainRange method\'s result length should have that length', () => {
    expect(getLinearDomainRange([0, 10], 5)).toStrictEqual([0, 2.5, 5, 7.5, 10]);
  });
});

describe('Test scale helpers', () => {
  test('Linear scales with numbers should return expected linear values', () => {
    const scale = createLinearScale([0, 10], [0, 100]);
    expect(scale(5)).toBe(50);
  });

  test('Linear scales with colors should return expected linear values', () => {
    const scale = createLinearScale([0, 10], ['white', 'black']);
    const maxValue = 255;
    const halfPoint = Math.round(maxValue / 2);
    expect(scale(5)).toBe(`rgb(${halfPoint}, ${halfPoint}, ${halfPoint})`);
  });
});
