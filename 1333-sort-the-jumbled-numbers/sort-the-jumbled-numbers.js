/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    let numMap = {};

    for (let i = 0; i < mapping.length; i++) {
        if (!numMap[i]) {
            numMap[i] = mapping[i]
        }
    }
    let modifiedArr = []
    for (let i = 0; i < nums.length; i++) {
        let numString = mapToArr(nums[i].toString(), numMap);
        numString = Number(numString);
        modifiedArr.push(numString)

    }
    let indexes = modifiedArr.map((_, i) => i);
    indexes.sort((a, b) => modifiedArr[a] - modifiedArr[b]);
    nums = indexes.map(i => nums[i]);

    // console.log(modifiedArr,)
    return nums

};

function mapToArr(num, map) {
    let resStr = "";
    for (let i = 0; i < num.length; i++) {
        resStr += map[num[i]]
    }
    return resStr;
}