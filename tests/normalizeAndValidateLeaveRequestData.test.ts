import { describe, expect, it } from "vitest";
// import { normalizeAndValidateLeaveRequestData } from "../src/solutions/normalizeAndValidateLeaveRequestData";
import { normalizeAndValidateLeaveRequestData } from "../src/prompts/normalizeAndValidateLeaveRequestData";

describe("normalizeAndValidateLeaveRequestData", () => {
  it("returns a normalized object for valid input", () => {
    expect(
      normalizeAndValidateLeaveRequestData({
        employeeId: 4,
        startDate: "2026-06-01",
        endDate: "2026-06-03",
        status: "APPROVED",
        leaveType: "VACATION",
        days: 3,
        createdAt: " 2026-05-01 ",
      }),
    ).toEqual({
      ok: true,
      value: {
        employeeId: 4,
        startDate: "2026-06-01",
        endDate: "2026-06-03",
        status: "approved",
        leaveType: "vacation",
        days: 3,
        createdAt: "2026-05-01",
      },
    });
  });

  it("returns structured errors for missing and invalid fields", () => {
    expect(
      normalizeAndValidateLeaveRequestData({
        employeeId: Number.NaN,
        startDate: "2026-06-10",
        endDate: "2026-06-05",
        status: "submitted",
        leaveType: "holiday",
        days: -1,
      }),
    ).toEqual({
      ok: false,
      errors: [
        { field: "employeeId", message: "employeeId is required and must be a number." },
        { field: "status", message: "status must be one of: pending, approved, denied." },
        { field: "leaveType", message: "leaveType must be one of: vacation, sick, personal, unpaid." },
        { field: "days", message: "days must be a non-negative number when provided." },
        { field: "startDate", message: "startDate must be before or equal to endDate." },
      ],
    });
  });

  it("validates missing required fields", () => {
    expect(normalizeAndValidateLeaveRequestData({})).toEqual({
      ok: false,
      errors: [
        { field: "employeeId", message: "employeeId is required and must be a number." },
        { field: "startDate", message: "startDate is required." },
        { field: "endDate", message: "endDate is required." },
        { field: "status", message: "status is required." },
      ],
    });
  });
});
