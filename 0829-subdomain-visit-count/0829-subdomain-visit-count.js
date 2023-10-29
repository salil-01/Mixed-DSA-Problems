/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let obj = {};
    for(let i=0; i<cpdomains.length; i++){
      let temp = cpdomains[i].split(" ");
      let domain = temp[1].split(".");
      // console.log(domain)
      let arr  = [];
      while(domain.length){
        arr.push(domain.join("."));
        domain.shift()
      }
      for(let i=0; i<arr.length; i++){
        if(!obj[arr[i]]){
          obj[arr[i]] = temp[0]
        }else{
          obj[arr[i]] = Number(obj[arr[i]]) + Number(temp[0])
        }
      }
    }
    let res = [];
    for(let key in obj){
      res.push(`${obj[key]} ${key}`)
    }
    // console.log(res)
    return res;
};