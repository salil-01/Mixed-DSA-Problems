/**
 * @param {string} digits
 * @return {string[]}
 */



function mergeArrayWithString(arr, str) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < str.length; j++) {
            res.push(arr[i] + str[j])
        }
    }
    return res;
}

function mergeStrings(str1, str2) {
    let res = [];
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            res.push(str1[i] + str2[j])
        }
    }
    return res;
}
var letterCombinations = function (digits) {
    let keyboard = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };

    let strArr = []
    for (let i = 0; i < digits.length; i++) {
        strArr.push(keyboard[digits[i]])
    }
    if (strArr.length === 1) {
        let res = [];
        for (let i = 0; i < strArr[0].length; i++) {
            res.push(strArr[0][i])
        };
        return res;
    }
    if (strArr.length === 0) {
        return [];
    }
    while (strArr.length >= 2) {
        let firstElement = strArr[0];
        let secondElement = strArr[1];


        if (typeof firstElement === "string" && typeof secondElement === "string") {
            let resultArr = mergeStrings(firstElement, secondElement);
            strArr.shift();
            strArr.shift();

            if (strArr.length === 0) {
                return resultArr
            } else {
                strArr.unshift(resultArr);
            }
        } else {
            let resultArr = mergeArrayWithString(firstElement, secondElement);
            strArr.shift();
            strArr.shift();

            if (strArr.length === 0) {
                return resultArr;
            } else {
                strArr.unshift(resultArr)
            }

        }

    }
};