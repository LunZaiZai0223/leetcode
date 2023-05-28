/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function (fn) {
  return function curried(...args) {
    // 比對 curried 丟入的值是否已經滿足於一開始丟入的 fn 所需的 parameters
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */

// [2632. Curry](https://leetcode.com/problems/curry/description/?utm_campaign=PostD10&utm_medium=Post&utm_source=Post&gio_link_id=QRekxgjo)
