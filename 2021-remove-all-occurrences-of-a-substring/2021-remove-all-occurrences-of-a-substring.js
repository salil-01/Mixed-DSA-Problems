/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
   let position = s.search(part);
//    console.log(position)
   while(position!==-1){
       let updatedStr = s.replace(part,"");
       s = updatedStr
       position = s.search(part);
   }
    // console.log(s)
    return s;
};