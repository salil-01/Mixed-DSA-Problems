// Socks Ended
// Description

// You haveNsocks. The color of thei-thsock isA[i]​. HereArepresents the array of socks.

// You want to perform the following operation as many times as possible. How many times can it be performed at most?

// Choose two same-colored socks that are not paired yet, and pair them.

// Print the number of Paired Socks.

// Note: One sock can only be used to make one pair.

// Input
// Constraints
// 1≤N≤5×10^5

// 1≤A[i]≤10^9

// All values in the input are integers.

// Input
// The input is given from Standard Input in the following format:

// N

// A 1​A 2​…  A N​

// Output
// Output
// Print an integer representing the answer.

// Sample Input 1

// 6
// 4 1 7 4 1 4
// Sample Output 1

// 2
// Sample Input 2

// 1
// 158260522
// Sample Output 2

// 0
// Sample Input 3

// 10
// 295 2 29 295 29 2 29 295 2 29
// Sample Output 3

// 4
// Hint

// You can do the operation twice as follows.

// Choose two socks with the color 1 and pair them.
// Choose two socks with the color 4 and pair them.
// Then, you will be left with one sock with the color 4 and another with the color 7, so you can no longer do the operation. There is no way to do the operation three or more times, so you should print 2.
function socks(N, A) {
  //Write Code Here
  let obj = {};
  for (let i = 0; i < N; i++) {
    if (!obj[A[i]]) {
      obj[A[i]] = 1;
    } else {
      obj[A[i]]++;
    }
  }
  // console.log(obj);
  let total = 0;
  for (let key in obj) {
    total += Math.floor(obj[key] / 2);
  }
  console.log(total);
}
