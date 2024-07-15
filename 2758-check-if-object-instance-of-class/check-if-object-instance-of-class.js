/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj == null) return false;
    if (obj.constructor === classFunction) {
        return true;
    } else {
        return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction)
    }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */