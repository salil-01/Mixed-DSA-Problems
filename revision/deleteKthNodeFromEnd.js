// Delete Kth node from end Ended
// Description

// You are given a Linked list of size N and an integer K. Your task is to delete the Kth node from the end and return the head of this new Linked list.

// Input
// Input Format
// The first line of the input contains an integer t - denoting the number of testcases.

// The next 2*t lines contain the description of the t testcases.

// The first line contains two integers N and K - the size of the Linked list and the position.

// The second line contains N space separated integers - denoting the N elements of the Linked list.

// Constraints
// 1 ≤ t ≤ 1000

// 1 ≤ N ≤ 1000

// 1 ≤ K ≤ N

// 1 ≤ LinkedList[i] ≤ 10^6

// Output
// Output Format
// You do not have to print anything, just return the head of the new Linked List.

// Sample Input 1

// 3
// 3 2
// 1 2 3
// 3 1
// 1 2 3
// 3 3
// 1 2 3
// Sample Output 1

// 1 3
// 1 2
// 2 3
// Hint

// First testcase
// For the first testcase the 2nd Node from the end is 2 which is to be deleted, leaving 1 3 only in the LinkedList.

// Second testcase
// In the second testcase the 1st Node from the end is the last node itself, so deleting the 3 and returning the head would give 1 2 as the remaining Linked list.

// Third testcase
// 3rd Node from last is basically the 1st Node, so the remaining Linked List is 2 3.
const LinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
// Complete the function below
function deleteKthNodeFromEnd(head, k) {
  // let current = head;
  let pt1 = head;
  let pt2 = head;
  let i = 0;
  while (i < k) {
    pt1 = pt1.next;
    i++;
  }
  // return pt1;
  if (!pt1) {
    return head.next;
  }
  while (pt1.next) {
    pt1 = pt1.next;
    pt2 = pt2.next;
  }
  pt2.next = pt2.next.next;
  return head;
}
