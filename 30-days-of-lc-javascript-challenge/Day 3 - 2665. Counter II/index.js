/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let counter = init;
  const increment = () => (counter += 1);
  const decrement = () => (counter -= 1);
  const reset = () => (counter = init);

  return Object.assign({}, { increment, decrement, reset });
};

// Factory function -> 工廠函式

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// [2665. Counter II](https://leetcode.com/problems/counter-ii/?utm_campaign=PostD3&utm_medium=Post&utm_source=Post&gio_link_id=xRxVYOXo)
