import type { LeaveRequest } from "../types/leave";

/*
Problem:
Given a new request and existing requests, detect if a likely duplicate exists
based on employeeId, date range, and leave type.

Sample input:
newRequest:
{ employeeId: 3, startDate: "2026-08-01", endDate: "2026-08-02", leaveType: "vacation" }

existingRequests:
[
  { employeeId: 3, startDate: "2026-08-01", endDate: "2026-08-02", leaveType: "vacation" }
]

Sample output:
true
*/
export function detectDuplicateLeaveSubmissions(
  newRequest: Pick<LeaveRequest, "employeeId" | "startDate" | "endDate" | "leaveType">,
  existingRequests: Pick<LeaveRequest, "employeeId" | "startDate" | "endDate" | "leaveType">[],
): boolean {
  // TODO:
  // A likely duplicate matches employeeId, startDate, endDate, and leaveType.
  throw new Error("TODO: implement detectDuplicateLeaveSubmissions");
}
