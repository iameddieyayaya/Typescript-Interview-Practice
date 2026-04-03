import type { LeaveRequest } from "../types/leave";

/*
Problem:
Given today's date and a list of requests with createdAt,
return pending requests older than X days.

Sample input:
today: "2026-04-15"
requests:
[
  { status: "pending", createdAt: "2026-04-01" },
  { status: "approved", createdAt: "2026-04-01" },
  { status: "pending", createdAt: "2026-04-12" }
]
xDays: 7

Sample output:
[
  { status: "pending", createdAt: "2026-04-01" }
]
*/
export function findEmployeesWithPendingRequestsOlderThanXDays(
  today: string,
  requests: Pick<LeaveRequest, "status" | "createdAt">[],
  minimumAgeInDays: number,
): Pick<LeaveRequest, "status" | "createdAt">[] {
  // TODO:
  // Keep only pending requests strictly older than the given number of days.
  throw new Error("TODO: implement findEmployeesWithPendingRequestsOlderThanXDays");
}
