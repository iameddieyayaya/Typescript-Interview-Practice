import type { LeaveRequest } from "../types/leave";
import { dateRangeOverlaps } from "./helpers";

export function detectOverlappingLeaveRequests(
  newRequest: Pick<LeaveRequest, "startDate" | "endDate">,
  approvedRequests: Pick<LeaveRequest, "startDate" | "endDate">[],
): boolean {
  return approvedRequests.some((existingRequest) =>
    dateRangeOverlaps(
      newRequest.startDate,
      newRequest.endDate,
      existingRequest.startDate,
      existingRequest.endDate,
    ),
  );
}
