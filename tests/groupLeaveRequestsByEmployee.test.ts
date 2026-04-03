import { describe, expect, it } from "vitest";
import {
  countLeaveRequestsByEmployee,
  getAverageLeaveDaysPerRequest,
  getEmployeesWithMoreThanNDays,
  getMaxLeaveRequest,
  getTopKEmployeesByLeaveDays,
  getTotalLeaveDays,
  groupAndSumByEmployeeAndType,
  groupLeaveRequestsByEmployee,
  groupLeaveRequestsByType,
  normalizeLeaveRequests,
} from "../src/prompts/groupLeaveRequestsByEmployee";
import { leaveRequestsFixture } from "./fixtures";

const basicRequests = leaveRequestsFixture.map(({ employeeId, days }) => ({
  employeeId,
  days,
}));

const typedRequests = [
  { employeeId: 1, days: 3, type: "vacation" as const },
  { employeeId: 1, days: 2, type: "sick" as const },
  { employeeId: 2, days: 5, type: "vacation" as const },
  { employeeId: 2, days: 1, type: "vacation" as const },
  { employeeId: 3, days: 4, type: "personal" as const },
];

describe("groupLeaveRequestsByEmployee", () => {
  it("returns total requested days per employee", () => {
    expect(groupLeaveRequestsByEmployee(leaveRequestsFixture)).toEqual({
      1: 5,
      2: 5,
      3: 4,
    });
  });

  it("returns an empty object for no requests", () => {
    expect(groupLeaveRequestsByEmployee([])).toEqual({});
  });

  it("handles multiple requests for the same employee", () => {
    expect(
      groupLeaveRequestsByEmployee([
        { employeeId: 42, days: 1 },
        { employeeId: 42, days: 2 },
        { employeeId: 42, days: 3 },
      ]),
    ).toEqual({ 42: 6 });
  });
});

describe("countLeaveRequestsByEmployee", () => {
  it("counts requests per employee", () => {
    expect(countLeaveRequestsByEmployee(basicRequests)).toEqual({
      1: 2,
      2: 1,
      3: 1,
    });
  });

  it("returns an empty object for no requests", () => {
    expect(countLeaveRequestsByEmployee([])).toEqual({});
  });
});

describe("groupLeaveRequestsByType", () => {
  it("groups requests into arrays by leave type", () => {
    expect(groupLeaveRequestsByType(typedRequests)).toEqual({
      vacation: [
        { employeeId: 1, days: 3, type: "vacation" },
        { employeeId: 2, days: 5, type: "vacation" },
        { employeeId: 2, days: 1, type: "vacation" },
      ],
      sick: [{ employeeId: 1, days: 2, type: "sick" }],
      personal: [{ employeeId: 3, days: 4, type: "personal" }],
    });
  });

  it("returns an empty object for no requests", () => {
    expect(groupLeaveRequestsByType([])).toEqual({});
  });
});

describe("getEmployeesWithMoreThanNDays", () => {
  it("returns employeeIds whose total leave days exceed the threshold", () => {
    expect(getEmployeesWithMoreThanNDays(basicRequests, 4)).toEqual([1, 2]);
  });

  it("returns an empty array when nothing matches", () => {
    expect(getEmployeesWithMoreThanNDays([], 4)).toEqual([]);
  });
});

describe("getTotalLeaveDays", () => {
  it("returns total leave days across all requests", () => {
    expect(getTotalLeaveDays(basicRequests)).toBe(14);
  });

  it("returns zero for an empty array", () => {
    expect(getTotalLeaveDays([])).toBe(0);
  });
});

describe("getAverageLeaveDaysPerRequest", () => {
  it("returns average days per request", () => {
    expect(getAverageLeaveDaysPerRequest(basicRequests)).toBe(3.5);
  });

  it("returns zero for an empty array", () => {
    expect(getAverageLeaveDaysPerRequest([])).toBe(0);
  });
});

describe("getMaxLeaveRequest", () => {
  it("returns the request with the highest number of days", () => {
    expect(getMaxLeaveRequest(basicRequests)).toEqual({ employeeId: 2, days: 5 });
  });

  it("returns undefined for an empty array", () => {
    expect(getMaxLeaveRequest([])).toBeUndefined();
  });
});

describe("normalizeLeaveRequests", () => {
  it("maps requests into a normalized, interview-friendly shape", () => {
    expect(normalizeLeaveRequests([
      { employeeId: 1, days: 3 },
      { employeeId: 2, days: 6 },
    ])).toEqual([
      { employeeId: 1, days: 3, isLongLeave: false },
      { employeeId: 2, days: 6, isLongLeave: true },
    ]);
  });

  it("returns an empty array for no requests", () => {
    expect(normalizeLeaveRequests([])).toEqual([]);
  });
});

describe("groupAndSumByEmployeeAndType", () => {
  it("groups and sums leave days by employee and type", () => {
    expect(groupAndSumByEmployeeAndType(typedRequests)).toEqual({
      1: { vacation: 3, sick: 2 },
      2: { vacation: 6 },
      3: { personal: 4 },
    });
  });

  it("returns an empty object for no requests", () => {
    expect(groupAndSumByEmployeeAndType([])).toEqual({});
  });
});

describe("getTopKEmployeesByLeaveDays", () => {
  it("returns the top k employees sorted by total leave days descending", () => {
    expect(getTopKEmployeesByLeaveDays(basicRequests, 2)).toEqual([1, 2]);
  });

  it("breaks ties by lower employeeId", () => {
    expect(getTopKEmployeesByLeaveDays([
      { employeeId: 2, days: 4 },
      { employeeId: 1, days: 4 },
    ], 2)).toEqual([1, 2]);
  });

  it("returns an empty array when k is zero or there are no requests", () => {
    expect(getTopKEmployeesByLeaveDays(basicRequests, 0)).toEqual([]);
    expect(getTopKEmployeesByLeaveDays([], 3)).toEqual([]);
  });
});
