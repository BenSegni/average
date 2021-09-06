let averageResult: number;

function calculateAverage(numberArray: number[]): void {
  averageResult = numberArray.reduce((a, b) => a + b) / numberArray.length;

  console.log("average result:", averageResult);
}

calculateAverage([1, 2, 3, 4, 5]);
