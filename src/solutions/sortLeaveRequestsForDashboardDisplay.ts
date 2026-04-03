import type { LeaveRequest } from "../types/leave";
import { compareDashboardRequests } from "./helpers";

export function sortLeaveRequestsForDashboardDisplay(requests: LeaveRequest[]): LeaveRequest[] {
  return [...requests].sort(compareDashboardRequests);
}
