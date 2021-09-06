var averageResult;
function calculateAverage(numberArray) {
    averageResult = numberArray.reduce(function (a, b) { return a + b; }) / numberArray.length;
    return averageResult;
}
var result = calculateAverage([1, 2, 3, 4, 5]);
console.log("average:", result);
