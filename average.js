var averageResult;
function calculateAverage() {
    var numberArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numberArray[_i] = arguments[_i];
    }
    averageResult = numberArray.reduce(function (a, b) { return a + b; }) / numberArray.length;
    return averageResult;
}
var result = calculateAverage(1, 2, 3, 4, 5, 6);
console.log("average:", result);
