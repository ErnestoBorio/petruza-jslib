/**
 * Generate an iterable range of numbers
 * 
 * @generator
 * @yields {number} The next number in the range
 * 
 * @function range
 * @param {number} from The starting number of the range, inclusive.
 * @param {number} to The ending number of the range, inclusive.
 * @param {number} [step] The increment.
 * 
 * @example
 * for (let i of range(0, 10)) {
 *     console.log(i);
 * }
 */
export function* range(from, to, step) {
	if (step === undefined) {
		step = from < to ? 1 : -1;
	}
	let evaluate;
	if (from < to) {
		if (step <= 0) {
			throw new Error(`Bad decreasing step ${step} for increasing range [${from}, ${to}].`);
		}
		evaluate = (from, to) => (from <= to);
	}
	else if (from > to) {
		if (step >= 0) {
			throw new Error(`Bad increasing step ${step} for decreasing range [${from}, ${to}].`);
		}
		evaluate = (from, to) => (from >= to);
	}
	else return { done: true };

	for (; evaluate(from, to); from += step) {
		yield from;
	}
	return from;
}
