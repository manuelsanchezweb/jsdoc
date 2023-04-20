/**
 * @author Manuel Sanchez Web <manuelsanweb@gmail.com>
 * @title Array Reverser
 * @description Reverses the elements of the input array. Example:
 * ```
 * const input = [1, 2, 3];
 * const output = reverseArray(input);
 * console.log(output); // [3, 2, 1]
 * ```
 * @param arr - The input array of numbers to be reversed.
 * @returns The reversed array.
 */
export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array.");
  }
  return arr.slice().reverse();
}
