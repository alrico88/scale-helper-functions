import {scaleLinear, scaleLog, scaleQuantile, scaleQuantize, scaleOrdinal, ScaleLinear, ScaleLogarithmic, ScaleQuantile, ScaleQuantize, ScaleOrdinal} from 'd3-scale';

export type Range = string[] | number[];

/**
 * Creates a linear scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
export function createLinearScale(domain: number[], range: Range): ScaleLinear<number, number | string> {
  return scaleLinear().domain(domain).range(range as never);
}

/**
 * Creates a log scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @param {number} [base] Base to use for log scale
 * @returns {Function} The scale function
 */
 export function createLogScale(domain: number[], range: Range, base?: number): ScaleLogarithmic<number, number | string> {
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
 * @returns {Function} The scale function
 */
 export function createQuantileScale(dataset: number[], range: Range): ScaleQuantile<number, number> {
  return scaleQuantile().domain(dataset).range(range as never);
}

/**
 * Returns a quantized scale based on dataset extent
 * Accepts continuous input and outputs a number of discrete quantities defined by the range.
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
export function createQuantizeScale(domain: number[], range: Range): ScaleQuantize<number, number> {
  return scaleQuantize().domain(domain).range(range as never);
}

/**
 * Returns an ordinal scale
 * Discrete input and discrete output
 *
 * @param {string[]} domain Discrete list of values ['A', 'B', 'C']
 * @param {string[]} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
export function createOrdinalScale(domain: string[], range: string[]): ScaleOrdinal<string, string> {
  return scaleOrdinal(domain, range);
}

/**
 * Gets a domain of N elements from a domain with less length
 *
 * @export
 * @param  {number[]} domain The existing domain
 * @param  {number} segmentsAmount The desired length for the linear domain
 * @return {number[]} The resulting domain
 */
export function getLinearDomainRange(domain: number[], segmentsAmount: number): number[] {
  const [min, max] = domain;

  const step = (max - min) / (segmentsAmount - 1);

  const array: number[] = [];

  for (let i = min; i <= max; i += step) {
    array.push(i);
  }

  return array;
}
