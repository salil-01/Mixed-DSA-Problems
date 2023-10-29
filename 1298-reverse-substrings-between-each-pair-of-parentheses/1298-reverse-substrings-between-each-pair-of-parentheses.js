/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let stack = []
  for(let i=0; i<s.length; i++){
      if(s[i]!==")"){
        //   pushing all the elements in stack other than ")"
          stack.push(s[i])
      }else{
          let temp = "";
          while(stack.length!==0 && stack[stack.length-1]!=="("){
            //   whenever we encounter ")" we will simply pop all the 
            // elements from stack and store them in temp
              temp += stack[stack.length-1];
              stack.pop();
          }
        //   if "(" remains after popping remove it 
          if(stack[stack.length-1]==="("){
              stack.pop();
          }

        //   again pushing all the elements of str as we have popped so they
        // already are in reversed order we do not need to manually reverse them
          for(let i=0; i<temp.length; i++){
              stack.push(temp[i]);
          }
      }
  }  
//   console.log(stack)
    return stack.join("")
};