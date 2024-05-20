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
var removeNodes = function(head) {
    let curr = reverseLinkedList(head);
    let temp = curr;
    while(curr && curr.next){
        if(curr.next.val < curr.val){
              // if the next value is smaller than skipping or removing that node
              curr.next = curr.next.next;
        }else{
              // just moving one step ahead
              curr = curr.next;
        }
    }
    // console.log(curr,temp)    
    let res = reverseLinkedList(temp);
    return res;
};
function reverseLinkedList(head){
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
}