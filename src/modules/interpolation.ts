import { createLinearScale } from './scales';
import { ScaleFunction } from './types';

/**
 * Function that given a domain, returns a scale
 * It will transform a number to a value between 0 and 1
 * @param {number[]} domain
 * @returns {ScaleFunction}
 */
export function createLinearInterpolator(domain: number[]): ScaleFunction {
  return createLinearScale(domain, [0, 1]);
}
