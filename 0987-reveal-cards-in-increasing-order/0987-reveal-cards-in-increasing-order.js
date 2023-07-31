/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let queue = [];
    deck = deck.sort((a,b)=>b-a);
    for(let i=0; i<deck.length; i++){
        if(i==0){
            queue.push(deck[i]);
        }else{
            let temp = queue[queue.length-1];
            queue.unshift(temp);
            queue.unshift(deck[i]);
            queue.pop();
        }
    }
    // console.log(queue)
    return queue;
};