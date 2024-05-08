/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 const MyListNode = class {
  constructor(nodeData) {
    this.val = nodeData;
    this.next = null;
  }
};
function reverse(head) {
    var previous = null;
    var current = head;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    head = previous;
    return head;
}

var doubleIt = function(head) {
  // revsering the ll
  let reversedHead = reverse(head)

  // adding both the ll
  let curr1 = reversedHead;
  let curr2 = reversedHead;
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
      res = new MyListNode(val);
      tail = res;
    } else {
      tail.next = new MyListNode(val);
      tail = tail.next;
    }
  }
  if (carry !== 0) {
    tail.next = new MyListNode(carry);
  }

// reversing again to get the ans 
    const ans = reverse(res);
    return ans;
};