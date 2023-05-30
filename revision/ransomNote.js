// Ransom note Ended
// Description

// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting. He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note. The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.

// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Input
// Input Format
// The first line containst, the number of test cases.

// Followsttest cases, where each test case is 3 lines long.

// The first line of each test case contains two space-separated integers,nandm, the number of words in themagazineand thenote, respectively.

// The second line of each test case containsnspace-separated strings, eachmagazine[i].

// The third line of each test case containsmspace-separated strings, eachnote[i].

// Constraints
// 1 <= n,m <= 30000

// 1 <= length of magazine[i] <= 5

// 1 <= length of note[i] <= 5

// Each word consists of english alphabetic letters (i.e a to z and A to Z)

// Output
// Output Format
// Print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

// Sample Input 1

// 1
// 6 4
// give me one grand today night
// give one grand today
// Sample Output 1

// Yes
// Sample Input 2

// 1
// 6 5
// two times three is not four
// two times two is four
// Sample Output 2

// No
// Hint

// First testcase
// All words in the note occur in the magazine

// Second testcase
// 'two' only occurs once in the magazine

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let mag = input[line++].trim().split(" ");
    let note = input[line++].trim().split(" ");
    ransom(n, k, mag, note) ? console.log("Yes") : console.log("No");
  }
}
function ransom(n, k, mag, note) {
  // console.log(n,k,mag,note)
  let obj = {};
  for (let i = 0; i < mag.length; i++) {
    if (!obj[mag[i]]) {
      obj[mag[i]] = 1;
    } else {
      obj[mag[i]]++;
    }
  }
  // console.log(obj)
  for (let i = 0; i < note.length; i++) {
    if (obj[note[i]]) {
      // console.log(note[i])
      if (obj[note[i]] == 1) {
        delete obj[note[i]];
      } else {
        obj[note[i]]--;
      }
    } else {
      return false;
    }
  }
  return true;
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
