// Atilla's Favorite Problem Ended
// Description

// In order to write a string, Atilla needs to first learn all letters that are contained in the string.

// Atilla needs to write a message which can be represented as a string s. He asks you what is the minimum alphabet size required so that one can write this message.

// The alphabet of sizex(1≤x≤26)contains only the firstxLatin letters. For example, an alphabet of size 4 contains only the charactersa, b, c and d.

// You are given a stringstrof lengthn, findx.

// Input
// Input Format

// The first line contains a single integer t — the number of test cases.

// The first line of each test case contains a single integer n — the length of the string.

// The second line of each test case contains a string s of length n, consisting of lowercase Latin letters.

// Constraints

// 1<=t<=10

// 1<=n<=10

// Output
// For each test case, output a single integer — the minimum alphabet size required to so that Atilla can write his message s.

// Sample Input 1

// 5
// 1
// a
// 4
// down
// 11
// masaischool
// 3
// bcf
// 5
// zzzzz
// Sample Output 1

// 1
// 23
// 19
// 6
// 26
// Hint

// For the first test case, Atilla needs to know only the character a, so the alphabet of size 1 which only contains a is enough.

// For the second test case, Atilla needs to know the characters d, o, w, n. The smallest alphabet size that contains all of them is 23 (such alphabet can be represented as the string abcdefghijklmnopqrstuvw).

//by sorting
function atillasProblem(n, str) {
  // write code here
  let alph = "abcdefghijklmnopqrstuvwxyz";
  let obj = {};
  for (let i = 0; i < alph.length; i++) {
    obj[alph[i]] = i + 1;
  }
  str = str.split("").sort();
  console.log(obj[str[str.length - 1]]);
}

//without sorting
function atillasProblem(n, str) {
  // write code here
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  // for(let i=0; i<alph.length; i++){
  //     obj[alph[i]] = i+1
  // }
  // console.log(obj)
  str = str.split("").sort();
  console.log(obj[str[str.length - 1]]);
}
