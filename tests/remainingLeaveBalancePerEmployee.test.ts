import { describe, expect, it } from "vitest";
// import { remainingLeaveBalancePerEmployee } from "../src/solutions/remainingLeaveBalancePerEmployee";
import { remainingLeaveBalancePerEmployee } from "../src/prompts/remainingLeaveBalancePerEmployee";
import { employeesFixture, leaveRequestsFixture } from "./fixtures";

describe("remainingLeaveBalancePerEmployee", () => {
  it("subtracts approved days from each employee balance", () => {
    const approvedRequests = leaveRequestsFixture
      .filter((request) => request.status === "approved")
      .map((request) => ({
        employeeId: request.employeeId,
        days: request.days,
      }));

    expect(remainingLeaveBalancePerEmployee(employeesFixture, approvedRequests)).toEqual([
      {
        employeeId: 1,
        name: "Ava Chen",
        annualLeaveBalance: 15,
        approvedDaysTaken: 3,
        remainingBalance: 12,
      },
      {
        employeeId: 2,
        name: "Noah Patel",
        annualLeaveBalance: 10,
        approvedDaysTaken: 5,
        remainingBalance: 5,
      },
      {
        employeeId: 3,
        name: "Mia Rivera",
        annualLeaveBalance: 5,
        approvedDaysTaken: 0,
        remainingBalance: 5,
      },
    ]);
  });

  it("handles employees with no requests", () => {
    expect(remainingLeaveBalancePerEmployee(employeesFixture, [])).toEqual([
      {
        employeeId: 1,
        name: "Ava Chen",
        annualLeaveBalance: 15,
        approvedDaysTaken: 0,
        remainingBalance: 15,
      },
      {
        employeeId: 2,
        name: "Noah Patel",
        annualLeaveBalance: 10,
        approvedDaysTaken: 0,
        remainingBalance: 10,
      },
      {
        employeeId: 3,
        name: "Mia Rivera",
        annualLeaveBalance: 5,
        approvedDaysTaken: 0,
        remainingBalance: 5,
      },
    ]);
  });

  it("allows negative remaining balance when approved leave exceeds entitlement", () => {
    expect(
      remainingLeaveBalancePerEmployee([{ id: 4, name: "Liam Gray", annualLeaveBalance: 2 }], [
        { employeeId: 4, days: 5 },
      ]),
    ).toEqual([
      {
        employeeId: 4,
        name: "Liam Gray",
        annualLeaveBalance: 2,
        approvedDaysTaken: 5,
        remainingBalance: -3,
      },
    ]);
  });
});
