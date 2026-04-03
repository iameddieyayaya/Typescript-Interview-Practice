import type { LeaveRequest, LeaveSummaryReport, LeaveType } from "../types/leave";

export function generateLeaveSummaryReport(requests: LeaveRequest[]): LeaveSummaryReport {
  const leaveTypeCounts = new Map<LeaveType, number>();
  let totalApprovedDays = 0;
  let totalPendingRequests = 0;

  for (const request of requests) {
    if (request.status === "approved") {
      totalApprovedDays += request.days;
    }

    if (request.status === "pending") {
      totalPendingRequests += 1;
    }

    if (request.leaveType) {
      leaveTypeCounts.set(request.leaveType, (leaveTypeCounts.get(request.leaveType) ?? 0) + 1);
    }
  }

  let mostCommonLeaveType: LeaveType | null = null;
  let highestCount = 0;

  for (const [leaveType, count] of leaveTypeCounts.entries()) {
    if (count > highestCount) {
      highestCount = count;
      mostCommonLeaveType = leaveType;
    }
  }

  return {
    totalRequests: requests.length,
    totalApprovedDays,
    totalPendingRequests,
    mostCommonLeaveType,
  };
}
