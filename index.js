const {
  scaleLinear,
  scaleLog,
  scaleQuantile,
  scaleQuantize,
} = require('d3-scale');

/**
 * Creates a linear scale
 *
 * @param {number[]} domain [min, max]
 * @param {number[]} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createLinearScale(domain, range) {
  return scaleLinear()
    .domain(domain)
    .range(range);
}

/**
 * Creates a log scale
 *
 * @param {number[]} domain [min, max]
 * @param {number[]} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createLogScale(domain, range) {
  return scaleLog()
    .domain(domain)
    .range(range);
}

/**
 * Returns a quantile scale based on dataset
 *
 * @param {number[]} dataset Full dataset to take into account
 * @param {number[]} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createQuantileScale(dataset, range) {
  return scaleQuantile()
    .domain(dataset)
    .range(range);
}

/**
 * Returns a quantized scale based on dataset extent
 *
 * @param {number[]} domain [min, max]
 * @param {number[]} range Desired resulting values of scaling
 * @returns {Function} The scale function
 */
function createQuantizeScale(domain, range) {
  return scaleQuantize()
    .domain(domain)
    .range(range);
}

module.exports.createLinearScale = createLinearScale;
module.exports.createLogScale = createLogScale;
module.exports.createQuantileScale = createQuantileScale;
module.exports.createQuantizeScale = createQuantizeScale;
