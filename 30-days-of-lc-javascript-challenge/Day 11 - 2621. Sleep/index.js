/**
 * @param {number} millis
 */
// async 一定會回傳 Promise，並且確保未來值
async function sleep(millis) {
  return new Promise(resolve => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * 透過 slepp 建立 Promise，並且透過 .then() 處理當 Promise 的狀態為 fulfilled 時就會叫用傳入的 callback，透過 callback 的 Parameter 可以得到 Promise fulfilled 確保的未來值
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

// [2621. Sleep](https://leetcode.com/problems/sleep/description/?utm_campaign=PostD11&utm_medium=Post&utm_source=Post&gio_link_id=5Rp2Wmzo)
