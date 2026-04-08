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
  let totalRequests = 0
  let totalApprovedDays = 0
  let totalPendingRequests = 0
  const leaveTypeCounts: Record<string, number> = {}

  requests.forEach((req) => {
    totalRequests += 1

    if (req.status == "approved") {
      totalApprovedDays += req.days
    }
    if (req.status == "pending") {
      totalPendingRequests += 1
    }

    if (req.leaveType) {
      leaveTypeCounts[req.leaveType] = (leaveTypeCounts[req.leaveType] || 0) + 1
    }

  })


  const leaveTypes = Object.keys(leaveTypeCounts)

  const mostCommonLeaveType =
    leaveTypes.length === 0
      ? null
      : leaveTypes.reduce((a, b) =>
        leaveTypeCounts[a] >= leaveTypeCounts[b] ? a : b)



  return {
    totalRequests,
    totalApprovedDays,
    totalPendingRequests,
    mostCommonLeaveType,
  }


}
