/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    // sorting wrt length of each word in string
    text = text.split(" ").sort((a,b)=>a.length-b.length);
    for(let i=0; i<text.length; i++){
    //  console.log(text[i])
        if(i==0){
            // if first char them make it upper case
            temp = text[i].split("");
            temp[0] = temp[0].toUpperCase();
            text[i] = temp.join("")
        }else{
            // all other should be lower case
            temp = text[i].split("");
            temp[0] = temp[0].toLowerCase();
            text[i] = temp.join("")
        }
    }
    // console.log(text)
    return text.join(" ");
};