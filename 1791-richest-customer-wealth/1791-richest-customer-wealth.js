/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let n = accounts.length;
    let m = accounts[0].length;
    let arr = [];
    let top = 0;
    while(top<n){
        let sum = 0;
        for(let i=0; i<m; i++){
            sum += accounts[top][i];
        }
        top++;
        arr.push(sum)
    }
    // console.log(arr)
    let maxx = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxx){
            maxx = arr[i]
        }
    }
    return maxx;
};