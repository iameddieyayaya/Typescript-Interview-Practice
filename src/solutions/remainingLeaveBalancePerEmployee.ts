import type { Employee, EmployeeRemainingBalance, LeaveRequest } from "../types/leave";

export function remainingLeaveBalancePerEmployee(
  employees: Employee[],
  approvedRequests: Pick<LeaveRequest, "employeeId" | "days">[],
): EmployeeRemainingBalance[] {
  const approvedDaysByEmployee = new Map<number, number>();

  for (const request of approvedRequests) {
    approvedDaysByEmployee.set(
      request.employeeId,
      (approvedDaysByEmployee.get(request.employeeId) ?? 0) + request.days,
    );
  }

  return employees.map((employee) => {
    const approvedDaysTaken = approvedDaysByEmployee.get(employee.id) ?? 0;

    return {
      employeeId: employee.id,
      name: employee.name,
      annualLeaveBalance: employee.annualLeaveBalance,
      approvedDaysTaken,
      remainingBalance: employee.annualLeaveBalance - approvedDaysTaken,
    };
  });
}
