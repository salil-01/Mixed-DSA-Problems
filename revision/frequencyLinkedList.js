// Frequency Linked List Ended
// Description

// Given an arrayarr, convert it into a linked list, such that the linked list contains the elements along with it the frequency of each element.

// The Linked list should be sorted(increasing).

// Note: It is a function complete, you have to complete the function and return the head of the Linked List.

// Input
// Input Format

// The first line contains an integerT, denoting the number of test cases.
// Each of the nextTlines will containnspace-separated integers denoting the elements of the Arrayarr.
// Constraints

// 1<=T<=10

// 1<=N<=10^5

// 1<=arr[i]<=10^3

// Output
// It is a function complete, so you are not required to print anything.
// For each test case, return the head of the linked list.

// Sample Input 1

// 1
// 6
// 1 2 3 1 3 4
// Sample Output 1

// 1,2 -> 2,1 -> 3,2 -> 4,1 -> null
const LinkedListNode = class {
  constructor(nodeData, frequency) {
    this.data = nodeData;
    this.frequency = frequency;
    this.next = null;
  }
};
// Complete the function below
function frequencyLinkedList(arr, n) {
  // console.log(arr)
  let obj = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      newArr.push(arr[i]);
    } else {
      obj[arr[i]]++;
    }
  }

  newArr = newArr.sort(function (a, b) {
    return a - b;
  });
  // console.log(newArr);
  let head = createList(newArr, obj);
  return head;
  // console.log(head)
}
function createList(arr, obj) {
  // console.log(arr)
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {
      data: arr[i],
      frequency: obj[arr[i]],
      next: list,
    };
  }
  return list;
}
