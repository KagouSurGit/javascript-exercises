const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 > num2) {
        const reverseNum = num1;
        num1 = num2;
        num2 = reverseNum;
    }
    let finalSum = 0;
    for (let i = num1; i < num2 + 1; i++) {
        finalSum += i;
    }
    return finalSum;
    /*let finalSum = 0;
    for (let i = num1; i < num2 + 1; i++) {
        finalSum += i;
    }
    return finalSum;*/
};

/*const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
      sum += i;
    }
    return sum;
  };*/

// Do not edit below this line
module.exports = sumAll;
