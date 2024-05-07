/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
   let ans = [];
   candidates = candidates.sort()
   recusiveBackTrack(0,candidates,target,ans,[]);
   return ans;
};
function recusiveBackTrack(index,candidates,target,ans,arr){
    if(index===candidates.length){
        // if it's the end element
        if(target === 0){
            // it means we found the sum
            ans.push([...arr])
        }
        return
    }

    if(candidates[index] <= target){
        // keep on same index
        //adding element in arr 
        arr.push(candidates[index]);
        //calling again after substracting the element from target
        recusiveBackTrack(index+1,candidates,target-candidates[index],ans,arr);
        // removing the element after recusrive calls are completes
        arr.pop() 

        //skipping same elements
        while (index < candidates.length - 1 && candidates[index] === candidates [index + 1]) {
            index++;
        }
    }
    // move to the next index
    recusiveBackTrack(index+1,candidates,target,ans,arr);
}