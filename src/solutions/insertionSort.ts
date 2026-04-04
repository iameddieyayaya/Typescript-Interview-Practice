export function insertionSort(numbers: number[]): number[] {
  const sorted = [...numbers];

  for (let index = 1; index < sorted.length; index += 1) {
    const valueToInsert = sorted[index]!;
    let scanIndex = index - 1;

    while (scanIndex >= 0 && sorted[scanIndex]! > valueToInsert) {
      sorted[scanIndex + 1] = sorted[scanIndex]!;
      scanIndex -= 1;
    }

    sorted[scanIndex + 1] = valueToInsert;
  }

  return sorted;
}
