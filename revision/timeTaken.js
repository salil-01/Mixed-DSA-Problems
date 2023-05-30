// Time taken Ended
// Description

// There are n people in a line to buy tickets for a movie.

// The ith (1<=i<=n) person in the line wants to buy a total oftickets[i]tickets.

// At each step the person at the front of the queue can buy 1 ticket and this takes 1 second of time.

// If they need more tickets, they go to the back of the queue again, this happens instantly and does not take any extra time, and this process is repeated until everyone can buy all the tickets they need.

// You are given an indexkand you have to tell the total time it takes for the kth person to buy all the tickets they need.

// Input
// Input Format
// The first line of input contains two integers n and k - the size of the tickets queue and the index of the person whose total time taken you have to output.

// The second line contains n space-separated integers, the ith of which is the number of tickets required by the ith person.

// Constraints
// 1 <= n <= 10^5

// 1 <= k <= n

// 1 <= tickets[i] <= 100

// Output
// Output Format
// Print the time taken for the person at position k to finish buying tickets.

// Sample Input 1

// 4 1
// 5 1 1 1
// Sample Output 1

// 8
// Hint

// In the first pass, everyone in the line buys a ticket and the line becomes [4].

// In the next 4 passes, only the person in position 1 is buying tickets.

// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let ticket = input[1].trim().split(" ").map(Number);
  time(n, k, ticket);
}
function time(n, k, ticket) {
  // console.log(n,k,ticket)
  let count = 0;
  let temp = new Array(n).fill(0);
  let queue = [];
  for (let i = 0; i < n; i++) {
    queue.push(i);
  }
  // console.log(queue);
  while (queue.length) {
    let x = queue[0];
    ticket[x] = ticket[x] - 1;
    count++;
    temp[x] = count;
    if (ticket[x] > 0) {
      queue.push(x);
    }
    queue.shift();
  }
  console.log(temp[k - 1]);
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
