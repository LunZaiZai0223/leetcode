/**
 * @param {Function} fn
 */
function memoize(fn) {
  const inputMap = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // 可以用這個方式確認一個物件是否有該 key -> 比起 if(inputMap[key]) 判斷更加的語義化
    if (key in inputMap) {
      return inputMap[key];
    } else {
      inputMap[key] = fn(...args);
      return inputMap[key];
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

// [2623. Memoize](https://leetcode.com/problems/memoize/description/)
