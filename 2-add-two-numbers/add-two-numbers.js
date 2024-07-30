/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let pt1 = l1;
    let pt2 = l2;
    let ans = null;
    let current = null;
    let carry = 0;
    
    while (pt1 !== null || pt2 !== null || carry !== 0) {
        let sum = carry;
        if (pt1 !== null) {
            sum += pt1.val;
            pt1 = pt1.next;
        }
        if (pt2 !== null) {
            sum += pt2.val;
            pt2 = pt2.next;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        
        if (current === null) {
            ans = new ListNode(sum);
            current = ans;
        } else {
            current.next = new ListNode(sum);
            current = current.next;
        }
    }
    
    return ans;
};
