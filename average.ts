let inputAverage: number;

function calculateInputAverage(...numberInputs: number[]): number {
  inputAverage = numberInputs.reduce((a, b) => a + b) / numberInputs.length;

  return inputAverage;
}

let result: number = calculateInputAverage(1, 2, 3, 4, 5, 6);

console.log("average:", result);
