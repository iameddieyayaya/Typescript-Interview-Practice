export function selectionSort(numbers: number[]): number[] {
  const sorted = [...numbers];

  for (let start = 0; start < sorted.length; start += 1) {
    let minIndex = start;

    for (let index = start + 1; index < sorted.length; index += 1) {
      const current = sorted[index]!;
      const min = sorted[minIndex]!;

      if (current < min) {
        minIndex = index;
      }
    }

    if (minIndex !== start) {
      const current = sorted[start];
      sorted[start] = sorted[minIndex]!;
      sorted[minIndex] = current!;
    }
  }

  return sorted;
}
