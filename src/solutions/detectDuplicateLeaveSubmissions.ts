import type { LeaveRequest } from "../types/leave";

export function detectDuplicateLeaveSubmissions(
  newRequest: Pick<LeaveRequest, "employeeId" | "startDate" | "endDate" | "leaveType">,
  existingRequests: Pick<LeaveRequest, "employeeId" | "startDate" | "endDate" | "leaveType">[],
): boolean {
  return existingRequests.some((existingRequest) => {
    return (
      existingRequest.employeeId === newRequest.employeeId &&
      existingRequest.startDate === newRequest.startDate &&
      existingRequest.endDate === newRequest.endDate &&
      existingRequest.leaveType === newRequest.leaveType
    );
  });
}
