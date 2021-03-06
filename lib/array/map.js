'use strict';

/* ECMA Reference
 * http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map
 */

/**
 * @param {Array} array - array
 * @param {Function} fn - function to execute 
       (element, index, array) => any
 * @param {Object} thisArg - context to pass to function
 * @return the computed array
 */
module.exports = function mapClosure(nativeMap) {
	return function map(array, fn, thisArg) {
		if (!array) {
			return;
		}

		if (!Array.isArray(array)) {
			return nativeMap.call(...arguments);
		}
		if (typeof fn !== 'function') {
			throw new TypeError();
		}

		const aRes = new Array(array.length);
		let functionToCall = thisArg === undefined ? fn : fn.bind(thisArg);

		for (let i = 0; i < array.length; i++) {
			aRes[i] = functionToCall(array[i], i, array);
		}

		return aRes;
	};
};
