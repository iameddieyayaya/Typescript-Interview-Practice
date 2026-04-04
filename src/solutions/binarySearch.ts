export function binarySearch(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const value = numbers[middle]!;

    if (value === target) {
      return middle;
    }

    if (value < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
