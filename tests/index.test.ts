import {createLinearScale, getLinearDomainRange, createLinearInterpolator} from '../src';

describe('Test domain helpers', () => {
  test('The getLinearDomainRange method\'s result length should have that length', () => {
    expect(getLinearDomainRange([0, 10], 5)).toStrictEqual([0, 2.5, 5, 7.5, 10]);
  });
});

describe('Test interpolation', () => {
  test('Interpolating a number in a domain should return a number between 0 and 1', () => {
    const interpolator = createLinearInterpolator([0, 10]);
    expect(interpolator(5)).toBe(0.5);
  });

  test('Interpolating a number bigger than the max of a domain should return a number greater than 1', () => {
    const interpolator = createLinearInterpolator([0, 10]);
    expect(interpolator(11) > 1).toBe(true);
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
