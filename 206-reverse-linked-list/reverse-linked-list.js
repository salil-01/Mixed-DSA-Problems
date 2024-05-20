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
var reverseList = function(head) {
    let current  = head;
    let past = null; 
    let future = null;

    while(current){
        future = current.next;
        current.next = past;
        past = current;
        current = future;
    }
    head = past;
    return head;
};