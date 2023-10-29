/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let obj = {};
    for(let i=0; i<knowledge.length; i++){
        if(!obj[knowledge[i][0]]){
            obj[knowledge[i][0]] = knowledge[i][1]
        }
    }
    let res = "";
    for(let i=0; i<s.length; i++){
        let temp = ""
        if(s[i]=="("){
            i++;
           while(s[i]!== ")"){
               temp += s[i];
               i++;
           }
        //    console.log(temp);
        if(obj[temp]){
            res += obj[temp]
        }else{
            res += "?"
        }
           temp = "";

        }else {
            if(s[i]!==")"){
                res += s[i]
            }
        }
    }
    // console.log(res);
    return res;
};