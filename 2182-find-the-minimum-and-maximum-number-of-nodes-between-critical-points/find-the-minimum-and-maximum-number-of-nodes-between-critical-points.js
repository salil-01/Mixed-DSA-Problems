/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let current = head;
    let position = [];
    let currentPosition = 1;

    while(current.next.next){

        // checking local minima and pushing in array
        if(current.next.val < current.val && current.next.val < current.next.next.val){
            position.push(currentPosition)
        }

        // checking local maxima and pushing its position in array
        if(current.next.val > current.val && current.next.val > current.next.next.val){
            position.push(currentPosition)
        }
        currentPosition++;
        current = current.next;
    }
    // console.log(position)
    let minDistance = Infinity;

    //  to calculte the minDistance between any position whose value are critical
    for(let i=1; i<position.length; i++){
        let tempDistance = position[i]-position[i-1];
        if(tempDistance<minDistance){
            minDistance = tempDistance;
        }
    }

    let maxDistance = -1
    // calc max only if postion array length greater than 1 
    if(position.length>1){
        maxDistance = position[position.length-1] - position[0]
    }

    if(minDistance===Infinity){
        // if there was no minDistance than return -1
        return [-1, maxDistance]
    }
    return [minDistance,maxDistance]
};