import { describe, expect, it } from "vitest";
import { binarySearch } from "../src/solutions/binarySearch";
import { bubbleSort } from "../src/solutions/bubbleSort";
import { insertionSort } from "../src/solutions/insertionSort";
import { mergeSort } from "../src/solutions/mergeSort";
import { quickSort } from "../src/solutions/quickSort";
import { selectionSort } from "../src/solutions/selectionSort";

const unsortedNumbers = [5, 1, 4, 2, 8, 5, -3];
const sortedNumbers = [-3, 1, 2, 4, 5, 5, 8];

describe("sorting algorithms", () => {
  const algorithms = [
    ["bubbleSort", bubbleSort],
    ["selectionSort", selectionSort],
    ["insertionSort", insertionSort],
    ["quickSort", quickSort],
    ["mergeSort", mergeSort],
  ] as const;

  for (const [name, sort] of algorithms) {
    describe(name, () => {
      it("sorts numbers in ascending order", () => {
        expect(sort(unsortedNumbers)).toEqual(sortedNumbers);
      });

      it("returns an empty array for empty input", () => {
        expect(sort([])).toEqual([]);
      });

      it("returns the same single-item array contents", () => {
        expect(sort([42])).toEqual([42]);
      });

      it("does not mutate the input array", () => {
        const input = [3, 2, 1];
        const result = sort(input);

        expect(result).toEqual([1, 2, 3]);
        expect(input).toEqual([3, 2, 1]);
      });
    });
  }
});

describe("binarySearch", () => {
  const numbers = [-3, 1, 2, 4, 5, 8, 13];

  it("returns the index when the target exists", () => {
    expect(binarySearch(numbers, 4)).toBe(3);
  });

  it("returns -1 when the target does not exist", () => {
    expect(binarySearch(numbers, 7)).toBe(-1);
  });

  it("handles an empty array", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });

  it("handles a single-item array", () => {
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], 7)).toBe(-1);
  });
});
