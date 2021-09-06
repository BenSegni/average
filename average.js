var averageResult;
function calculateAverage(numberArray) {
    averageResult = numberArray.reduce(function (a, b) { return a + b; }) / numberArray.length;
    console.log("average result:", averageResult);
}
calculateAverage([1, 2, 3, 4, 5]);
