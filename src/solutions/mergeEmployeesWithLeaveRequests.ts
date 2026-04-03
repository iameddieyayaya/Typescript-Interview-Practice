import type { Employee, EmployeeWithRequests, LeaveRequest } from "../types/leave";

export function mergeEmployeesWithLeaveRequests(
  employees: Employee[],
  requests: LeaveRequest[],
): EmployeeWithRequests[] {
  const requestsByEmployeeId = new Map<number, LeaveRequest[]>();

  for (const request of requests) {
    const employeeRequests = requestsByEmployeeId.get(request.employeeId);
    if (employeeRequests) {
      employeeRequests.push(request);
    } else {
      requestsByEmployeeId.set(request.employeeId, [request]);
    }
  }

  return employees.map((employee) => ({
    ...employee,
    requests: requestsByEmployeeId.get(employee.id) ?? [],
  }));
}
