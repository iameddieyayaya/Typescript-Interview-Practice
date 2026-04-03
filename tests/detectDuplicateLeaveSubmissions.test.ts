import { describe, expect, it } from "vitest";
// import { detectDuplicateLeaveSubmissions } from "../src/solutions/detectDuplicateLeaveSubmissions";
import { detectDuplicateLeaveSubmissions } from "../src/prompts/detectDuplicateLeaveSubmissions";

describe("detectDuplicateLeaveSubmissions", () => {
  const existingRequests = [
    {
      employeeId: 3,
      startDate: "2026-08-01",
      endDate: "2026-08-02",
      leaveType: "vacation" as const,
    },
  ];

  it("returns true when employee, range, and leave type match", () => {
    expect(
      detectDuplicateLeaveSubmissions(
        {
          employeeId: 3,
          startDate: "2026-08-01",
          endDate: "2026-08-02",
          leaveType: "vacation",
        },
        existingRequests,
      ),
    ).toBe(true);
  });

  it("returns false when leave type differs", () => {
    expect(
      detectDuplicateLeaveSubmissions(
        {
          employeeId: 3,
          startDate: "2026-08-01",
          endDate: "2026-08-02",
          leaveType: "sick",
        },
        existingRequests,
      ),
    ).toBe(false);
  });

  it("returns false when the date range differs", () => {
    expect(
      detectDuplicateLeaveSubmissions(
        {
          employeeId: 3,
          startDate: "2026-08-03",
          endDate: "2026-08-04",
          leaveType: "vacation",
        },
        existingRequests,
      ),
    ).toBe(false);
  });
});
