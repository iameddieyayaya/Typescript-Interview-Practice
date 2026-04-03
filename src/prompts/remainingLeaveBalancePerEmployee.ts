import type { Employee, EmployeeRemainingBalance, LeaveRequest } from "../types/leave";

/*
Problem:
Given a list of employees with annual leave balances and a list of approved leave requests,
return each employee with remaining balance.

Edge cases:
- employee has no approved requests
- approved days exceed the employee's balance

Sample input:
employees:
[
  { id: 1, name: "Ava", annualLeaveBalance: 15 },
  { id: 2, name: "Noah", annualLeaveBalance: 10 }
]

approvedRequests:
[
  { employeeId: 1, days: 4 },
  { employeeId: 1, days: 3 }
]

Sample output:
[
  { employeeId: 1, name: "Ava", approvedDaysTaken: 7, remainingBalance: 8, annualLeaveBalance: 15 },
  { employeeId: 2, name: "Noah", approvedDaysTaken: 0, remainingBalance: 10, annualLeaveBalance: 10 }
]
*/
export function remainingLeaveBalancePerEmployee(
  employees: Employee[],
  approvedRequests: Pick<LeaveRequest, "employeeId" | "days">[],
): EmployeeRemainingBalance[] {
  // TODO:
  // Sum approved days per employee and subtract from annualLeaveBalance.
  throw new Error("TODO: implement remainingLeaveBalancePerEmployee");
}
