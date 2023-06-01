/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

/*
 * 已知 debounce 為一個 HOF，收要執行的函式及延遲多久為 parameters
 *
 *   1. 必須記錄刪除上一次的 timer -> 代表不用執行輸入的 function（時間未到時就叫用）
 *   2. 時間內叫用不用觸發上一次 timer 時的 function，並且重新建立 timer
 *   3. 只有最後滿足時間才可以叫用輸入的 function
 * */
var debounce = function (fn, t) {
  // 透過 functional scope 保存 timer
  let timer;
  return function (...args) {
    // 有 timer => 時間內被重新叫用
    if (timer) {
      clearTimeout(timer);
    }
    // 重新建立 timer => 待時間到便會執行 setTimeout，執行過的就會自動被銷毀
    timer = setTimeout(() => fn(...args), t);
  };
};

/**
 * const log = debounce(console.log, 100); // 所以這裡會拿到 return function...
 * log('Hello'); // cancelled 輸入的 hello 會灌入 return function 之內
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms 未重新叫用，因此 setTimeout 內的 function 在時間到時會推入 event loop => call stack 叫用
 */

// [2627. Debounce](https://leetcode.com/problems/debounce/description/?utm_campaign=PostD15&utm_medium=Post&utm_source=Post&gio_link_id=AovN2Ojo)
