export function bubbleSort(numbers: number[]): number[] {
  const sorted = [...numbers];

  for (let end = sorted.length - 1; end > 0; end -= 1) {
    let swapped = false;

    for (let index = 0; index < end; index += 1) {
      const left = sorted[index]!;
      const right = sorted[index + 1]!;

      if (left > right) {
        sorted[index] = right;
        sorted[index + 1] = left;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  return sorted;
}
