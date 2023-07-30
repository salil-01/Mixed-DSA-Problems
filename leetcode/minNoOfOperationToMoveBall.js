/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  let index = [];
  let res = [];
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i] == 1) {
      index.push(i);
    }
  }
  // console.log(index)
  for (let i = 0; i < boxes.length; i++) {
    let temp = 0;
    for (let j = 0; j < index.length; j++) {
      temp += Math.abs(i - index[j]);
    }
    res.push(temp);
    // console.log(temp)
  }
  return res;
};
