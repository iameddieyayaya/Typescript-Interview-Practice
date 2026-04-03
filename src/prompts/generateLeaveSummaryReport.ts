import type { LeaveRequest, LeaveSummaryReport } from "../types/leave";

/*
Problem:
Given leave requests, generate a summary object containing:
- total requests
- total approved days
- total pending requests
- most common leave type (if provided)

Sample input:
[
  { status: "approved", days: 3, leaveType: "vacation" },
  { status: "pending", days: 2, leaveType: "vacation" },
  { status: "approved", days: 1, leaveType: "sick" }
]

Sample output:
{
  totalRequests: 3,
  totalApprovedDays: 4,
  totalPendingRequests: 1,
  mostCommonLeaveType: "vacation"
}
*/
export function generateLeaveSummaryReport(requests: LeaveRequest[]): LeaveSummaryReport {
  // TODO:
  // Walk the list once and build the summary fields.
  throw new Error("TODO: implement generateLeaveSummaryReport");
}
