/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
let beauty = 0
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            const ss = s.substring(i, j + 1)
            
            // frequencies for each alphabet in substring
            let f = [...Array(26)].fill(0)
            for(let k = 0; k < ss.length; k++) {
                f[ss[k].charCodeAt(0) - 97]++
            }
            // ignore alphabets with count 0
            // along with array being sorted, mfs and lfs can be accessible as last/first element of the array
            f = f.filter(x => x > 0)
            f.sort((a, b) => a - b)

            // count mfs and lfs
            const mfs = f[f.length-1]
            const lfs = f[0]
            if(f.length) {
                beauty += (mfs - lfs)
            }
        }
    }
    return beauty
   
};
// bruteforce solution => gives TLE
 // pushing each substring in array
    // let substrArr = []
    // for(let i=0; i<s.length; i++){
    //     let temp = "";
    //     for(let j=i; j<s.length; j++){
    //         temp += s[j];
    //         substrArr.push(temp);
    //     }

    // }
    // // console.log(substrArr);
    // let total = 0;
    // for(let i=0; i<substrArr.length; i++){
    //     // mapping over each substring
    //     let obj = {};
    //     let temp = substrArr[i];
    //     for(let j=0; j<temp.length; j++){
    //         if(!obj[temp[j]]){
    //             obj[temp[j]] = 1;
    //         }else{
    //             obj[temp[j]]++;
    //         }
    //     }
    //     // taking out max and min value of char count of each substring
    //     let min = Infinity;
    //     let max = -Infinity;
    //     for(let key in obj){
    //         if(obj[key]>max){
    //             max = obj[key]
    //         }
    //         if(obj[key]<min){
    //             min = obj[key]
    //         }
    //     }
    //     // getting the difference btween max and min
    //    if(max-min!==0){
    //       total = total + (max-min)
    //    }
    // }
    // // console.log(total)
    // return total