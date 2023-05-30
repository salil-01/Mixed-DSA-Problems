// Yellow And Red Card Ended
// Description

// N players numbered 1 to N will play a soccer game. When a player commits an offense, that player will receive a yellow card or a red card. A player who satisfies one of the following conditions will be removed from the game.

// Accumulates two yellow cards.
// Receives a red card.
// Once a player is removed, that player will no longer receive any cards.

// You will watch this game. Initially, the players have not received any cards. There will be Q events. Correctly answer the questions asked in the events. There are three kinds of events, which are given in the format c x from the input, where c is 1, 2, or 3. The events are as follows.

// 1 x: Player x receives a yellow card.
// 2 x: Player x receives a red card.
// 3 x: You are asked whether player x has been removed from the game. Answer Yes or No.

// Input
// Input Format

// The first line contains the number of players N and the number of events Q

// The next Q lines contains two integers each : The type of event and the player

// Constraints

// 1<=N,Q<=1000

// 1<=type(i)<=3

// 1<=xi<=N

// Output
// Print X lines, where X is the number of events of the third kind in the input.The i-th line should contain Yes if, for the i-th event of the third kind, player x has been removed from the game, and No otherwise.

// Sample Input 1

// 3 9
// 3 1
// 3 2
// 1 2
// 2 1
// 3 1
// 3 2
// 1 2
// 3 2
// 3 3
// Sample Output 1

// No
// No
// Yes
// No
// Yes
// No
// Hint

// Here are all the events in chronological order.

// In the 1-st event, you are asked whether player 1 has been removed from the game. Player 1 has not been removed, so you should print No.
// In the 2-nd event, you are asked whether player 2 has been removed from the game. Player 2 has not been removed, so you should print No.
// In the 3-rd event, player 2 receives a yellow card.
// In the 4-th event, player 1 receives a red card and is removed from the game.
// In the 5-th event, you are asked whether player 1 has been removed from the game. Player 1 has been removed, so you should print Yes.
// In the 6-th event, you are asked whether player 2 has been removed from the game. Player 2 has not been removed, so you should print No.
// In the 7-th event, player 2 receives a yellow card and is removed from the game.
// In the 8-th event, you are asked whether player 2 has been removed from the game. Player 2 has been removed, so you should print Yes.
// In the 9-th event, you are asked whether player 3 has been removed from the game. Player 3 has not been removed, so you should print No.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, q] = input[0].trim().split(" ").map(Number);
  let player = {};
  let yellow = {};
  let red = {};
  for (let i = 0; i < n; i++) {
    player[i + 1] = 1;
  }
  //   console.log(player);
  let line = 1;
  for (let i = 0; i < q; i++) {
    let [x, y] = input[line++].trim().split(" ").map(Number);
    if (x === 1) {
      if (!yellow[y]) {
        yellow[y] = 1;
      } else {
        yellow[y]++;
      }
      if (yellow[y] >= 2) {
        if (player[y]) {
          delete player[y];
        }
      }
    } else if (x == 2) {
      if (!red[y]) {
        red[y] = 1;
      } else {
        red[y]++;
      }
      if (red[y] > 0) {
        if (player[y]) {
          delete player[y];
        }
      }
    } else if (x == 3) {
      if (player[y]) {
        console.log("No");
      } else {
        console.log("Yes");
      }
    }
  }
  //   console.log(red)
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
