/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    // 第一次遍歷時先賦值 x，省略還要判斷 index 是否為 functions.length - 1 的判斷，之後的遍歷就是拿 result 執行函式
    let result = x;

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }

    return result;
  };
};

// const fn = compose([x => x + 1, x => 2 * x]); -> 這邊是回傳 compose 本身回傳的函式
// fn(4); // 9 -> 帶入 4 為第一次遍歷時的參數，之後的遍歷就是直接拿上一次遍歷的結果丟入接下來的函式計算

// [2629. Function Composition](https://leetcode.com/problems/function-composition/?utm_campaign=PostD7&utm_medium=Post&utm_source=Post&gio_link_id=4PY7wZM9)
