import { describe, expect, it } from "vitest";
// import { detectOverlappingLeaveRequests } from "../src/solutions/detectOverlappingLeaveRequests";
import { detectOverlappingLeaveRequests } from "../src/prompts/detectOverlappingLeaveRequests";

describe("detectOverlappingLeaveRequests", () => {
  const approvedRequests = [
    { startDate: "2026-05-05", endDate: "2026-05-10" },
    { startDate: "2026-06-15", endDate: "2026-06-18" },
  ];

  it("returns true for touching ranges", () => {
    expect(
      detectOverlappingLeaveRequests(
        { startDate: "2026-05-01", endDate: "2026-05-05" },
        approvedRequests,
      ),
    ).toBe(true);
  });

  it("returns true for exact overlap", () => {
    expect(
      detectOverlappingLeaveRequests(
        { startDate: "2026-06-15", endDate: "2026-06-18" },
        approvedRequests,
      ),
    ).toBe(true);
  });

  it("returns true for contained ranges", () => {
    expect(
      detectOverlappingLeaveRequests(
        { startDate: "2026-06-16", endDate: "2026-06-17" },
        approvedRequests,
      ),
    ).toBe(true);
  });

  it("returns false when no range overlaps", () => {
    expect(
      detectOverlappingLeaveRequests(
        { startDate: "2026-06-19", endDate: "2026-06-21" },
        approvedRequests,
      ),
    ).toBe(false);
  });
});
