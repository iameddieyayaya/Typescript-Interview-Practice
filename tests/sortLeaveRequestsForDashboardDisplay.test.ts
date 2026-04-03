import { describe, expect, it } from "vitest";
// import { sortLeaveRequestsForDashboardDisplay } from "../src/solutions/sortLeaveRequestsForDashboardDisplay";
import { sortLeaveRequestsForDashboardDisplay } from "../src/prompts/sortLeaveRequestsForDashboardDisplay";
import type { LeaveRequest } from "../src/types/leave";

describe("sortLeaveRequestsForDashboardDisplay", () => {
  it("sorts by status order and then by most recent start date", () => {
    const requests: LeaveRequest[] = [
      {
        id: 1,
        employeeId: 1,
        status: "approved",
        days: 2,
        startDate: "2026-07-10",
        endDate: "2026-07-11",
        createdAt: "2026-04-01",
      },
      {
        id: 2,
        employeeId: 1,
        status: "pending",
        days: 2,
        startDate: "2026-06-10",
        endDate: "2026-06-11",
        createdAt: "2026-04-01",
      },
      {
        id: 3,
        employeeId: 2,
        status: "pending",
        days: 3,
        startDate: "2026-07-15",
        endDate: "2026-07-17",
        createdAt: "2026-04-02",
      },
      {
        id: 4,
        employeeId: 3,
        status: "denied",
        days: 1,
        startDate: "2026-07-20",
        endDate: "2026-07-20",
        createdAt: "2026-04-03",
      },
    ];

    expect(sortLeaveRequestsForDashboardDisplay(requests).map((request) => request.id)).toEqual([
      3,
      2,
      1,
      4,
    ]);
  });

  it("does not mutate the original array", () => {
    const requests: LeaveRequest[] = [
      {
        id: 1,
        employeeId: 1,
        status: "approved",
        days: 1,
        startDate: "2026-07-01",
        endDate: "2026-07-01",
        createdAt: "2026-04-01",
      },
      {
        id: 2,
        employeeId: 1,
        status: "pending",
        days: 1,
        startDate: "2026-06-01",
        endDate: "2026-06-01",
        createdAt: "2026-04-01",
      },
    ];

    const copyBeforeSort = requests.map((request) => request.id);
    sortLeaveRequestsForDashboardDisplay(requests);

    expect(requests.map((request) => request.id)).toEqual(copyBeforeSort);
  });
});
