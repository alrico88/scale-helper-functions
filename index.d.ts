/**
 * @type {(string|number)[]} Range
 */
/**
 * Creates a linear scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
export function createLinearScale(domain: number[], range: Range): Function;
/**
 * Creates a log scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @param {number} [base] Base to use for log scale
 * @returns {Function} The scale function
 */
export function createLogScale(domain: number[], range: Range, base?: number): Function;
/**
 * Returns a quantile scale based on dataset
 *
 * @param {number[]} dataset Full dataset to take into account
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
export function createQuantileScale(dataset: number[], range: Range): Function;
/**
 * Returns a quantized scale based on dataset extent
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
export function createQuantizeScale(domain: number[], range: Range): Function;
