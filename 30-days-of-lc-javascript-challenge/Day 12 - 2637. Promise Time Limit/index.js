/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
      fn(...args)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// [2637. Promise Time Limit](https://leetcode.com/problems/promise-time-limit/?utm_campaign=PostD12&utm_medium=Post&utm_source=Post&gio_link_id=nombN5Z9)
