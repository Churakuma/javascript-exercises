const sumAll = function(min, max) {
    let result = 0;

    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR"
    if (min > max) {
        [min, max] = [max, min]
    }
    
    for (let index = min; index <= max; index++) {
        result += index;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
