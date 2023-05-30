// Hardware problem Ended
// Description

// Ansh turned on a computer at time 0 and clicked the mouse N times.

// The i-th (1≤i≤N) click was at timeT[i]. HereTrepresents the array of times, i.e, when the mouse of clicked.

// If he consecutively clicked the mouse at time x1 and time x2 (where x1 <x2), a double click is said to be fired at time x2 if and only ifx2 −x1 ≤ D.

// What time was a double click fired for the first time? If no double click was fired, print -1 instead.

// Input
// Input Format
// The first line of input data contains a single integer t — the number of test cases.

// The next 2*t lines contain the description of the test cases.

// The first line of each test case contains two integers - N and D.

// The second line of each test case contains n space-separated integers - T[1], T[2], ....T[N].

// Constraints
// 1 ≤ t ≤ 10^3

// 1 ≤ n ≤ 10^3

// 1 ≤ d ≤ 10^9

// 1 ≤ Ti ≤ 10^9

// Ti<Ti+1​ (1 ≤ i ≤ N−1)

// Output
// Output Format
// For each testcase If at least one double click was fired, print the time of the first such event; otherwise, print -1

// Sample Input 1

// 3
// 4 500
// 300 900 1300 1700
// 5 99
// 100 200 300 400 500
// 4 500
// 100 600 1100 1600
// Sample Output 1

// 1300
// -1
// 600
function hardwareProblem(N, D, T) {
  // Code here
  let flag = true;
  for (let i = 0, j = 1; i < N; i++, j++) {
    if (T[j] - T[i] <= D) {
      console.log(T[j]);
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(-1);
  }
}
