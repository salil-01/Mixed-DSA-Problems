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
var mergeNodes = function(head) {
    let current = head.next;
    let sumHead = current;
    count = 1
    while(sumHead){
        let sum = 0;

        // lopping and getting all the sum in a variable
        while(sumHead.val!==0){
            sum += sumHead.val;
            sumHead = sumHead.next;
        }

        current.val = sum;
        sumHead = sumHead.next; // jumping over the zero value
        current.next = sumHead;
        current = current.next  
    }
    return head.next;
};