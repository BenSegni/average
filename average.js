var averageResult;
function calculateAverage() {
    var numberInputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numberInputs[_i] = arguments[_i];
    }
    averageResult = numberInputs.reduce(function (a, b) { return a + b; }) / numberInputs.length;
    return averageResult;
}
var result = calculateAverage(1, 2, 3, 4, 5, 6);
console.log("average:", result);
