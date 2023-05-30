// Intersect and Reverse Ended
// Description

// You are given two pointers which are reference to the head node of two lists. These lists intersect at one point and from there on, they merge into one.

// You have to find this intersection point and the list from this till the end, reverse it and send a reference to the head node of this list.

// Note: You have to create a new list which contains only these common nodes in reversed order and return the head of this list.

// You do not have to output anything. Just complete the intersectAndReverse function and return the reference to the head node of the list.

// intersectAndReverse has the following parameters:

// -headNodeA :a reference to the head node of the first list

// -headNodeB :a reference to the head node of the second list

// Input
// Input Format
// The first line of input contains two integers n and m, the number of elements in the linked list A and B respectively.

// The next line contains n integers, the node data values of list A in order.

// The next line contains m integers, the node data values of list B in order.

// Constraints
// 1
// 1 <= n <=
// 1
// 0
// 5
// 10
// 5

// 1
// 1 <= node values <=
// 1
// 0
// 4
// 10
// 4

// Output
// Output Format
// Output the reversed list in a single line separated by space.

// Sample Input 1

// 5 4
// 1 34 5 2 108
// 7 5 2 108
// Sample Output 1

// 108 2 5
// Hint

// The lists merge into each other at the node which has value 5.

// So from 5 to 2 and then to 108, this is the common list.

// Hence the reversed list is 108 2 5.
const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
var intersectAndReverse = function (head1, head2) {
  // console.log(head1);
  let pt1 = head1;
  let pt2 = head2;
  let arr1 = [];
  let arr2 = [];
  // console.log(1)
  while (pt1) {
    arr1.push(pt1.data);
    pt1 = pt1.next;
  }
  while (pt2) {
    arr2.push(pt2.data);
    pt2 = pt2.next;
  }
  // console.log(arr1,arr2)
  arr1 = arr1.reverse();
  arr2 = arr2.reverse();
  let res = [];
  let j = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[i] == arr2[j]) {
      res.push(arr2[i]);
      j++;
    } else {
      break;
    }
  }
  console.log(res.join(" "));
};
