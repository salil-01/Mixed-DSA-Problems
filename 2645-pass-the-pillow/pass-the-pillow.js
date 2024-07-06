/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */

//   loop solution
// var passThePillow = function(n, time) {
//     let currentPos = 1;
//     let direction = 1; // 0 for reverse manner 
     
//      while(time){
//         if(direction){
//             currentPos++;
//             time--;
//             if(currentPos === n){
//                 //reached the last point reverse the direction
//                 direction = 0;
//             }
//         }else{
//             currentPos--; //position will be substracted in reverse manner 
//             time--;
//             if(currentPos===1){
//                 // reverse again we reached the first point
//                 direction = 1;
//             }
//         }
//      }
//      return currentPos;
//     //  console.log(currentPos)
// };


// mathematical solm
var passThePillow = function(n, time) {
    let chunks = Math.floor(time / (n - 1));
    return chunks % 2 === 0 ? (time % (n - 1) + 1) : (n - time % (n - 1));
};