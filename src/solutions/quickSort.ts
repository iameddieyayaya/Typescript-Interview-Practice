export function quickSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return [...numbers];
  }

  const pivotIndex = Math.floor(numbers.length / 2);
  const pivot = numbers[pivotIndex]!;
  const smaller: number[] = [];
  const equal: number[] = [];
  const larger: number[] = [];

  for (const value of numbers) {
    if (value < pivot) {
      smaller.push(value);
    } else if (value > pivot) {
      larger.push(value);
    } else {
      equal.push(value);
    }
  }

  return [...quickSort(smaller), ...equal, ...quickSort(larger)];
}
