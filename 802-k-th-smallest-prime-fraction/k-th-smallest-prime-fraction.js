/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  let fractions = [], ans = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            fractions.push([arr[i] / arr[j], arr[i], arr[j]])
        }
    }
    fractions.sort((a, b) => a[0] - b[0]);
    console.log(fractions)
    return [fractions[k - 1][1], fractions[k - 1][2]]
};


//brute force 
function fun (arr,k){
   let fractionalArr = [];
   let obj = {}
    for(let i=0; i<arr.length-1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(i<=k){
                let fraction = `${arr[i]},${arr[j]}`;
                let decimal = arr[i]/arr[j];
                obj[decimal] = fraction
                fractionalArr.push(decimal)
            }else{
                fractionalArr.sort()
                let res = fractionalArr[k-1];
                // console.log(,res,obj,fractionalArr)
                return obj[res].split(",").map(Number)
            }
        }
    }
    // console.log(fractionalArr.sort(),obj);
    fractionalArr.sort()
    let res = fractionalArr[k-1];
    // console.log(,res,obj,fractionalArr)
    return obj[res].split(",").map(Number)
}
