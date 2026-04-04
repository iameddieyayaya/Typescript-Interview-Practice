function merge(left: number[], right: number[]): number[] {
  const merged: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex]! <= right[rightIndex]!) {
      merged.push(left[leftIndex]!);
      leftIndex += 1;
    } else {
      merged.push(right[rightIndex]!);
      rightIndex += 1;
    }
  }

  while (leftIndex < left.length) {
    merged.push(left[leftIndex]!);
    leftIndex += 1;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]!);
    rightIndex += 1;
  }

  return merged;
}

export function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) {
    return [...numbers];
  }

  const middleIndex = Math.floor(numbers.length / 2);
  const left = mergeSort(numbers.slice(0, middleIndex));
  const right = mergeSort(numbers.slice(middleIndex));

  return merge(left, right);
}
