const repeatString = function(text, repetitions) {
    let result = ""

    if (repetitions >= 0) {
        while (repetitions > 0) {
        result += text;
        repetitions--;
        }
    } else {
        result = "ERROR"
    }

    

    return result;
};

// Do not edit below this line
module.exports = repeatString;
