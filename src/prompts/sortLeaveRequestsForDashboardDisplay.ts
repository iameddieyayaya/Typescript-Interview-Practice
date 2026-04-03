import type { LeaveRequest } from "../types/leave";

/*
Problem:
Sort requests by:
- pending first
- then approved
- then denied

Within each status, sort by most recent start date first.

Sample input:
[
  { status: "approved", startDate: "2026-07-10" },
  { status: "pending", startDate: "2026-06-10" },
  { status: "pending", startDate: "2026-07-15" }
]

Sample output order:
1. pending, 2026-07-15
2. pending, 2026-06-10
3. approved, 2026-07-10
*/
export function sortLeaveRequestsForDashboardDisplay(requests: LeaveRequest[]): LeaveRequest[] {
  // TODO:
  // Return a new sorted array.
  // Do not mutate the original input.
  throw new Error("TODO: implement sortLeaveRequestsForDashboardDisplay");
}
