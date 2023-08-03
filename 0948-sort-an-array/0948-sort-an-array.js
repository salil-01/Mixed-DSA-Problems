/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // console.log(nums)
    mergeSort(nums,0,nums.length-1)
    // console.log(nums)
    return nums
};

function mergeSort(nums,start,end){
    // base case
    if(start>=end){
        return
    }
    let mid = start + Math.floor((end-start)/2);
    mergeSort(nums,start,mid);
    mergeSort(nums,mid+1,end);
    // console.log(nums)

    // merging sorted arrays
    mergeArrays(nums,start,mid,end)
}
function mergeArrays(nums,start,mid,end){
    let n1 = mid-start+1;
    let n2 = end - mid;

    let leftArr = new Array(n1)
    let rightArr = new Array(n2)
    
    // moving data into newly created arrays
    for(let i=0; i<n1; i++){
        leftArr[i] = nums[start+i]
    }
    for(let i=0; i<n2; i++){
        rightArr[i] = nums[mid+1+i]
    }

    // merging sorted arrays
    let i = 0;
    let j =0;
    let k = start;
    while(i<n1 && j<n2){
        if(leftArr[i]<rightArr[j]){
            nums[k++] = leftArr[i++]
        }else{
            nums[k++] = rightArr[j++]
        }
    }

    // pushing remaining elements 
    while(i<n1){
        nums[k++] = leftArr[i++]
    }
    while(j<n2){
        nums[k++] = rightArr[j++]
    }
}