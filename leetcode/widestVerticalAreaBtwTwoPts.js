/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let xAxis = [];
  for (let i = 0; i < points.length; i++) {
    xAxis.push(points[i][0]);
  }
  xAxis = xAxis.sort((a, b) => a - b);
  // console.log(xAxis)
  let max = 0;

  for (let i = 0, j = 1; i < xAxis.length - 1; i++, j++) {
    if (xAxis[j] - xAxis[i] > max) {
      max = xAxis[j] - xAxis[i];
    }
  }
  // console.log(max)
  return max;
};
