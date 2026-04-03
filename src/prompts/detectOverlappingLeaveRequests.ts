import type { LeaveRequest } from "../types/leave";

/*
Problem:
Given a new leave request and a list of existing approved requests,
determine whether the new request overlaps with any existing request.

Assume dates are strings in YYYY-MM-DD format.

Edge cases:
- touching ranges
- exact overlaps
- contained ranges

Sample input:
newRequest: { startDate: "2026-05-03", endDate: "2026-05-05" }
existing: [{ startDate: "2026-05-05", endDate: "2026-05-10" }]

Sample output:
true
*/
export function detectOverlappingLeaveRequests(
  newRequest: Pick<LeaveRequest, "startDate" | "endDate">,
  approvedRequests: Pick<LeaveRequest, "startDate" | "endDate">[],
): boolean {
  // TODO:
  // Return true if any approved request overlaps the new date range.
  // Treat touching boundaries as overlapping.
  throw new Error("TODO: implement detectOverlappingLeaveRequests");
}
