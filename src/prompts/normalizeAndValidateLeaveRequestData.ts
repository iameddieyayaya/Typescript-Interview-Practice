import type { BasicLeaveRequestInput, ValidationResult } from "../types/leave";

/*
Problem:
Given incoming leave request data, validate:
- employeeId exists
- start date exists
- end date exists
- start date is before or equal to end date
- status is one of: pending, approved, denied

Return a normalized object or a structured validation error.

Sample input:
{
  employeeId: 4,
  startDate: "2026-06-01",
  endDate: "2026-06-03",
  status: "APPROVED"
}

Sample output:
{
  ok: true,
  value: {
    employeeId: 4,
    startDate: "2026-06-01",
    endDate: "2026-06-03",
    status: "approved",
    days: 0
  }
}
*/
export function normalizeAndValidateLeaveRequestData(input: BasicLeaveRequestInput): ValidationResult {
  // TODO:
  // Normalize strings where helpful.
  // Return { ok: true, value } for valid input.
  // Return { ok: false, errors } for invalid input.
  throw new Error("TODO: implement normalizeAndValidateLeaveRequestData");
}
