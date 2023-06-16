// Reverse in pair Ended
// Description

// Given a linked list, swap every two adjacent nodes and return its head.

// For example,

// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

// This is a function complete problem so return the head pointer of this new list, do not print anything.

// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// The next 2*t lines contains the description of the t testcases.

// The first line of each testcase contains an integer n - the size of the list.

// The second line of each testcase contains n space-separated integers - the n elements of the list.

// Constraints
// 1 ≤ t ≤ 10^5

// 1 ≤ n ≤ 500

// 1 ≤ list[i] ≤ 500

// Output
// Output Format
// You do not have to output anything, just return the head of this linked list which has elements reversed in pairs.

// Sample Input 1

// 2
// 4
// 1 2 3 4
// 3
// 1 2 3
// Sample Output 1

// 2 1 4 3
// 2 1 3

const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var reversePair = function (head) {
  // return head
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr.data);
    curr = curr.next;
  }

  let temp = revArr(arr);
  head = arrToList(temp);
  return head;
};
function revArr(arr) {
  if (arr.length % 2 == 0) {
    let i = 0;
    j = 1;
    while (i < arr.length - 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i = i + 1;
      j = j + 1;
    }
    return arr;
  } else {
    let i = 0;
    j = 1;
    while (i < arr.length - 2) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i = i + 2;
      j = j + 2;
    }
    return arr;
  }
}

function arrToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      data: arr[i],
      next: list,
    };
  }
  return list;
}
