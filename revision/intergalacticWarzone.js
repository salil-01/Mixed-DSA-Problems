// Intergalactic Warzone Ended
// Description

// You have recently purchased a new game which is about a war between humans and aliens.

// In this you set out to destroy all the planets. Since this is a game, the number of planets, their orbitting position etc are all different -

// There are n number of planets, and m total orbits. m maybe less than n, meaning that there might be multiple planets in one orbit.

// Now you have two machine to destroy these planets:

// Machine A destroys any planet and uses 1 unit of energy.

// Machine B destorys all planets in an orbit but usescunits of energy.

// You can any of these machines any number of times. What is the minimum energy you can use to destroy all the planets.

// Input
// Input Format
// The input contains multiple testcases. The first line contains an integer t - the number of testcases.

// The next 2*t lines contain the description of the t testcases.

// The first line of each testcase contains two integers n and c.

// The second line of each testcase contains n space separated integers - orbit[1],orbit[2]....orbit[n] - denoting the orbit of the n planets.

// Constraints
// 1 ≤ t ≤ 100

// 1 ≤ n,c ≤ 100

// 1 ≤ orbit[i] ≤ 100

// Output
// Output Format
// For each testcase print the minimum energy you will need to destroy all the planets.

// Sample Input 1

// 4
// 10 1
// 2 1 4 5 2 4 5 5 1 2
// 5 2
// 3 2 1 2 2
// 2 2
// 1 1
// 2 2
// 1 2
// Sample Output 1

// 4
// 4
// 2
// 2
// Hint

// First testcase
// In the first test case, the cost of using both machines is the same, so you can always use the second one and destroy all planets in orbit 1, all planets in orbit 2, all planets in orbit 4, all planets in orbit 5.

// Second testcase
// In the second test case, it is advantageous to use the second machine for 2 units to destroy all the planets in orbit 2, then destroy the remaining two planets using the first machine.

// Third testcase
// In the third test case, you can use the first machine twice or the second machine once.

// Fourth testcase
// In the fourth test case, it is advantageous to use the first machine twice.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, c] = input[line++].trim().split(" ").map(Number);
    let orbit = input[line++].trim().split(" ").map(Number);
    warZone(n, c, orbit);
  }
}
function warZone(n, c, orbit) {
  // console.log(n,c,orbit)
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (!obj[orbit[i]]) {
      obj[orbit[i]] = 1;
    } else {
      obj[orbit[i]]++;
    }
  }
  // console.log(obj);
  let total = 0;
  for (let key in obj) {
    if (obj[key] > 1) {
      let machA = 1 * obj[key];
      let machB = c * 1;
      total += Math.min(machA, machB);
    } else {
      total++;
    }
  }
  console.log(total);
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
