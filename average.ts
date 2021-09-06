let averageResult: number;

function calculateAverage(numberArray: number[]): number {
  averageResult = numberArray.reduce((a, b) => a + b) / numberArray.length;

  return averageResult;
}

let result: number = calculateAverage([1, 2, 3, 4, 5]);

console.log("average:", result);
