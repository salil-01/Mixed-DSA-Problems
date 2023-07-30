/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  // sorting by column
  score = score.sort((a, b) => b[k] - a[k]);
  // console.log(score)
  return score;
};
