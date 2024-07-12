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
    // mappin g of the keyboard
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
        // pushing all the chars of digit with the help of map
        strArr.push(keyboard[digits[i]])
    }

    // some speciifc conditions check
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
        //running this loop until there are 0 or 1 ele
        let firstElement = strArr[0];
        let secondElement = strArr[1];


        if (typeof firstElement === "string" && typeof secondElement === "string") {
            // if bnoth the el are strings merging them and removing those
            // strings from strArr
            let resultArr = mergeStrings(firstElement, secondElement);
            strArr.shift();
            strArr.shift();

            if (strArr.length === 0) {
                // after removing the first two el, if there are no el remaining
                // simply we got the answer
                return resultArr
            } else {
                //else puttimng as the first element
                strArr.unshift(resultArr);
            }
        } else {
            // means first element is arr and other is string, merging them
            // also removing those from strArr
            let resultArr = mergeArrayWithString(firstElement, secondElement);
            strArr.shift();
            strArr.shift();

            if (strArr.length === 0) {
                // if there are no elements left we got the answer
                return resultArr;
            } else {
                // else adding the new array as first element in strArr
                strArr.unshift(resultArr)
            }

        }

    }
};