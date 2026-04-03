import type { LeaveRequest, RequestCountsByStatus } from "../types/leave";

export function countRequestsByStatus(requests: Pick<LeaveRequest, "status">[]): RequestCountsByStatus {
  const counts: RequestCountsByStatus = {
    pending: 0,
    approved: 0,
    denied: 0,
  };

  for (const request of requests) {
    counts[request.status] += 1;
  }

  return counts;
}
