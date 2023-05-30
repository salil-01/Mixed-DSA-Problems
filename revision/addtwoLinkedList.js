// Add two Linked Lists Ended
// Description

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Return the head of the updated linked list (In reverse order)

// Input
// This is a function complete problem.

// Refer to sample input for understanding

// First Line contains the number of elements in the first linked list (t1)

// Next t1 lines contains a single node of linked list in which the first element is the head

// The next line contains the number of elements in the second linked list (t2)

// Next t2 lines contains a single node of linked list in which the first element is the head

// Constraints
// 1 <= t1,t2 <= 1000
// 0 <= list[i] <= 1000

// Output
// Complete the function

// Sample Input 1

// 3
// 2
// 4
// 3
// 3
// 5
// 6
// 4
// Sample Output 1

// 7 0 8
// Hint

// 342 + 465 = 807
const ListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};

// Complete the function below

var addTwoNumbers = function (l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let res = null;
  let tail = null;
  let carry = 0;

  while (curr1 !== null || curr2 !== null) {
    let total = 0;
    if (curr1 == null) {
      total = curr2.val;
      curr2 = curr2.next;
    } else if (curr2 == null) {
      total = curr1.val;
      curr1 = curr1.next;
    } else {
      total = curr1.val + curr2.val;
      curr1 = curr1.next;
      curr2 = curr2.next;
    }
    total = total + carry;
    carry = Math.floor(total / 10);
    val = total % 10;
    if (res == null) {
      res = new ListNode(val);
      tail = res;
    } else {
      tail.next = new ListNode(val);
      tail = tail.next;
    }
  }
  if (carry !== 0) {
    tail.next = new ListNode(carry);
  }
  return res;
};
