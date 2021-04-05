import {scaleLinear, scaleLog, scaleQuantile, scaleQuantize, scaleOrdinal} from 'd3-scale';
import {OrdinalScaleFunction, ScaleFunction} from './types';

export type Range = string[] | number[];

/**
 * Creates a linear scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {ScaleFunction} The scale function
 */
export function createLinearScale(domain: number[], range: Range): ScaleFunction {
  return scaleLinear().domain(domain).range(range as never);
}

/**
 * Creates a log scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @param {number} [base] Base to use for log scale
 * @returns {ScaleFunction} The scale function
 */
 export function createLogScale(domain: number[], range: Range, base?: number): ScaleFunction {
  if (base !== null && base !== undefined) {
    return scaleLog().base(base).domain(domain).range(range as never);
  } else {
    return scaleLog().domain(domain).range(range as never);
  }
}

/**
 * Returns a quantile scale based on dataset
 * Maps continuous numeric input to discrete values. The domain is defined by an array of numbers:
 *
 * @param {number[]} dataset Full dataset to take into account
 * @param {Range} range Desired resulting values of scaling
 * @returns {ScaleFunction} The scale function
 */
 export function createQuantileScale(dataset: number[], range: Range): ScaleFunction {
  return scaleQuantile().domain(dataset).range(range as never);
}

/**
 * Returns a quantized scale based on dataset extent
 * Accepts continuous input and outputs a number of discrete quantities defined by the range.
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {ScaleFunction} The scale function
 */
export function createQuantizeScale(domain: number[], range: Range): ScaleFunction {
  return scaleQuantize().domain(domain).range(range as never);
}

/**
 * Returns an ordinal scale
 * Discrete input and discrete output
 *
 * @param {string[]} domain Discrete list of values ['A', 'B', 'C']
 * @param {string[]} range Desired resulting values of scaling
 * @returns {ScaleFunction} The scale function
 */
export function createOrdinalScale(domain: string[], range: string[]): OrdinalScaleFunction {
  return scaleOrdinal(domain, range);
}

/**
 * Returns, given a domain, a function that will convert a number to another one between 0 and 255
 * Useful for calculating opacity values for RGBA strings
 *
 * @export
 * @param {number[]} domain [min, max]
 * @return {ScaleFunction} The scale function
 */
export function createOpacityScale(domain: number[]): ScaleFunction {
  return createLinearScale(domain, [0, 255]);
}
