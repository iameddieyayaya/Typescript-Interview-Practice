import type { LeaveRequest, RequestCountsByStatus } from "../types/leave";

/*
Problem:
Given a list of leave requests, return counts by status.

Example input:
[
  { status: "pending" },
  { status: "approved" },
  { status: "approved" },
  { status: "denied" }
]

Example output:
{ pending: 1, approved: 2, denied: 1 }
*/
export function countRequestsByStatus(
  requests: Pick<LeaveRequest, "status">[],
): RequestCountsByStatus {
  // TODO:
  // Count how many requests appear in each status bucket.
  throw new Error("TODO: implement countRequestsByStatus");
}
