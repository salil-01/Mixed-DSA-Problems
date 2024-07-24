
var MapSum = function () {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    // setting the values in map
    this.map.set(key, val)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let sum = 0;
    // console.log(this.map)
    for (let [key, value] of this.map) {
        if (key.startsWith(prefix)) {
            sum += value
        }
    }
    // console.log(sum)
    return sum
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */