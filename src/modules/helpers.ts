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
