// Cypher Sequence Ended
// Description

// Luca has a cypher made up of a sequence of n wheels, each with a digit ai written on it. On the i-th wheel, he made bi moves. Each move is one of two types:

// up move (denoted by U): it increases the i-th digit by 1. After applying the up move on 9, it becomes 0.
// down move (denoted by D): it decreases the i-th digit by 1. After applying the down move on 0, it becomes 9.

// Luca knows the final sequence of wheels and the moves for each wheel. Help him find the original sequence and crack the cypher.

// Input
// Input Format

// The first line contains a single integer t — the number of test cases.

// The first line of each test case contains a single integer n — the number of wheels.

// The second line contains n integers ai — the digit shown on the i-th wheel after all moves have been performed.

// Then n lines follow, the i-th of which contains the integer bi and bi characters that are either U or D — the number of moves performed on the i-th wheel, and the moves performed. U and D represent an up move and a down move respectively.

// Constraints

// 1<=t=10

// 1<=n<=100

// 0<=ai<=9

// 1<=bi<=n

// Output
// For each test case, output n space-separated digits — the initial sequence of the cypher.

// Sample Input 1

// 3
// 3
// 9 3 1
// 3 DDD
// 4 UDUU
// 2 DU
// 2
// 0 9
// 9 DDDDDDDDD
// 9 UUUUUUUUU
// 5
// 0 5 9 8 3
// 10 UUUUUUUUUU
// 3 UUD
// 8 UUDUUDDD
// 10 UUDUUDUDDU
// 4 UUUU
// Sample Output 1

// 2 1 1
// 9 0
// 0 4 9 6 9
// Hint

// In the first test case, we can prove that initial sequence was [2,1,1]. In that case, the following moves were performed:

// On the first wheel: 2→D→1→D→0→D→9.
// On the second wheel: 1→U→2→D→1→U→2→U→3.
// On the third wheel: 1→D→0→U→1.
// The final sequence was [9,3,1], which matches the input.
function cypherSequence(n, arr, moves) {
  //write code here
  // console.log(n,arr,moves)
  let ans = [];
  for (let i = 0; i < n; i++) {
    let res = check(arr[i], moves[i][1]);
    ans.push(res);
  }
  console.log(ans.join(" "));
}
function check(num, str) {
  // console.log(num,str)
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "D") {
      if (num == 9) {
        num = 0;
      } else {
        num++;
      }
    } else {
      if (num == 0) {
        num = 9;
      } else {
        num--;
      }
    }
  }
  // console.log(num)
  return num;
}
