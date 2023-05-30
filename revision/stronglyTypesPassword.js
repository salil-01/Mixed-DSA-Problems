// Strongly Typed Password Ended
// Description

// You are given an array of strings, whose size is stored in a variable with the nameN

// The string array, is stored in a variable with the namearr

// You have to find how many of the strings stored in the array arr, areweak, and how many of them arestrong

// A string is considered as strong if it contains at least one of the following characters in it@,$,#,*

// Consider the example, in which the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

// The first string "test123", does not contain any of the required characters, hence the string is weak

// The second string "new@t", contains the character `@`, hence the string is strong

// The third string "mon*y", contains the character `*`, hence the string is strong

// The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
// Therefore, the required output becomesweak strong strong weak

// Input
// The first line of the input contains the value stored inN

// The next line containsNspace separated string denoting the values stored in the string array

// Output
// For each string present inarr, print whether the string isweakorstrong

// Sample Input 1

// 4
// test123 new@t mon*y nrupul
// Sample Output 1

// weak strong strong weak
// Hint

// In the sample test case, the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

// The first string "test123", does not contain any of the required characters, hence the string is weak

// The second string "new@t", contains the character `@`, hence the string is strong

// The third string "mon*y", contains the character `*`, hence the string is strong

// The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
// Therefore, the required output becomesweak strong strong weak
function strongPassword(N, arr) {
  //write code here
  let temp = [];
  for (let i = 0; i < N; i++) {
    if (check(arr[i])) {
      temp.push("strong");
    } else {
      temp.push("weak");
    }
  }
  console.log(temp.join(" "));
}
function check(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "@" || str[i] == "$" || str[i] == "#" || str[i] == "*") {
      return true;
    }
  }
  return false;
}
