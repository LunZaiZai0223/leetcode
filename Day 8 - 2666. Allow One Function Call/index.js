/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isCalled = false;
  return function (...args) {
    if (!isCalled) {
      isCalled = true;
      return fn(...args);
    }
    // 函式預設就是回傳 undefined，因此不用特別 return undefined
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

// [2666. Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/?utm_campaign=PostD8&utm_medium=Post&utm_source=Post&gio_link_id=a9By01Oo)
