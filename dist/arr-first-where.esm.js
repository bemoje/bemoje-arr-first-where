import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Return the first element of an array where the callback returns true.
 * @param {Array} arr - The array to iterate
 * @param {predicate} callback - The callback(element, index, array): boolean
 * @returns {any} The first element to satisfy the condition
 */
function arrFirstWhere(arr, callback) {
	assertArgs(arr, callback);
	assertType(Array, arr);
	assertType(Function, callback);

	for (let i = 0, len = arr.length; i < len; i++) {
		if (callback(arr[i], i, arr) === true) {
			return arr[i]
		}
	}

	return null
}

/**
 * @callback predicate
 * @param {*} element - The current array element
 * @param {number} index - The current index
 * @param {Array} array - The array being itereated
 * @returns {boolean}
 */

export default arrFirstWhere;
