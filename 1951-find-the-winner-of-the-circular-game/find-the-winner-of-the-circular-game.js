/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let friendsArr = [];
    for(let i=1; i<=n; i++){
        friendsArr.push(i)
    };

    let start = 0;
    while(friendsArr.length > 1){
       let indexToBeDeleted = (start + k - 1) % friendsArr.length;
       friendsArr.splice(indexToBeDeleted,1);
       start = indexToBeDeleted;
    }
    // console.log(friendsArr)
    return friendsArr
};