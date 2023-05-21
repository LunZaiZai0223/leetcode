/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const result = [];

  arr.forEach((ele, index) => {
    if (fn(arr[index], +index)) result.push(arr[index]);
  });

  return result;
};

// [2634. Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array/?utm_campaign=PostD5&utm_medium=Post&utm_source=Post&gio_link_id=a9a5VZr9)
