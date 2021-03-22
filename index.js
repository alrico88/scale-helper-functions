const {
  scaleLinear,
  scaleLog,
  scaleQuantile,
  scaleQuantize,
  scaleOrdinal,
} = require('d3-scale');

/**
 * @typedef {string[]|number[]} Range
 */

/**
 * Creates a linear scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createLinearScale(domain, range) {
  return scaleLinear().domain(domain).range(range);
}

/**
 * Creates a log scale
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @param {number} [base] Base to use for log scale
 * @returns {Function} The scale function
 */
function createLogScale(domain, range, base) {
  if (base) {
    return scaleLog().base(base).domain(domain).range(range);
  } else {
    return scaleLog().domain(domain).range(range);
  }
}

/**
 * Returns a quantile scale based on dataset
 *
 * @param {number[]} dataset Full dataset to take into account
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createQuantileScale(dataset, range) {
  return scaleQuantile().domain(dataset).range(range);
}

/**
 * Returns a quantized scale based on dataset extent
 *
 * @param {number[]} domain [min, max]
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createQuantizeScale(domain, range) {
  return scaleQuantize().domain(domain).range(range);
}

/**
 * Returns an ordinal scale
 * Discrete input and discrete output
 *
 * @param {string[]} domain Discrete list of values ['A', 'B', 'C']
 * @param {Range} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createOrdinalScale(domain, range) {
  return scaleOrdinal(domain, range);
}

module.exports = {
  createLinearScale,
  createLogScale,
  createQuantileScale,
  createQuantizeScale,
  createOrdinalScale,
};
