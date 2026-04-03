import { describe, expect, it } from "vitest";
// import { generateLeaveSummaryReport } from "../src/solutions/generateLeaveSummaryReport";
import { generateLeaveSummaryReport } from "../src/prompts/generateLeaveSummaryReport";
import { leaveRequestsFixture } from "./fixtures";

describe("generateLeaveSummaryReport", () => {
  it("builds the requested summary", () => {
    expect(generateLeaveSummaryReport(leaveRequestsFixture)).toEqual({
      totalRequests: 4,
      totalApprovedDays: 8,
      totalPendingRequests: 1,
      mostCommonLeaveType: "vacation",
    });
  });

  it("returns null for mostCommonLeaveType when no leave type is provided", () => {
    expect(
      generateLeaveSummaryReport([
        {
          id: 1,
          employeeId: 1,
          status: "approved",
          days: 1,
          startDate: "2026-05-01",
          endDate: "2026-05-01",
          createdAt: "2026-04-01",
        },
      ]),
    ).toEqual({
      totalRequests: 1,
      totalApprovedDays: 1,
      totalPendingRequests: 0,
      mostCommonLeaveType: null,
    });
  });
});
