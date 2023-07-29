/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  for (let i = 0; i < asteroids.length; i++) {
    if (asteroids[i] > 0 || stack.length == 0 || stack[stack.length - 1] < 0) {
      //    if value +ive simply push in stack
      stack.push(asteroids[i]);
    } else {
      //    if value is negative pop out smaller +ive value from stack
      while (
        stack.length !== 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroids[i])
      ) {
        stack.pop();
      }
      if (
        stack.length !== 0 &&
        stack[stack.length - 1] === Math.abs(asteroids[i])
      ) {
        stack.pop();
      } else if (stack.length == 0 || stack[stack.length - 1] <= 0) {
        stack.push(asteroids[i]);
      }
    }
  }
  // console.log(stack)
  return stack;
};
