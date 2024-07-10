/**
 * @param {number[]} nums
 * @return {number}
 */

// function to reverse string
function reverseString(str){
    let res = ""
    for(let i=str.length-1; i>=0; i--){
        res += str[i]
    }
    return Number(res)
}
var countDistinctIntegers = function(nums) {
    let initalNumsLength = nums.length;
    for(let i=0; i<initalNumsLength; i++){
        // reversing the num by converting to string 
        let reversedNum = reverseString(nums[i].toString());
        nums.push(reversedNum);
    }
    // creating set to get the distinct elements
    let distinctArr = new Set(nums);
    return distinctArr.size;
};