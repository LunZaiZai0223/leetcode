/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  // 第一次遍歷時拿 init，之後就會以上一次的結果為起點
  let result = init;

  nums.forEach(num => {
    result = fn(result, num);
  });

  return result;
};

// [2626. Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation/description/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9)
