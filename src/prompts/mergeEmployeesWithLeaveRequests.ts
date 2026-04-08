import type { Employee, EmployeeWithRequests, LeaveRequest } from "../types/leave";

/*
Problem:
Given a list of employees and a list of leave requests, return employees enriched with their requests.
Use efficient lookup logic rather than nested loops where possible.

Sample input:
employees:
[
  { id: 1, name: "Ava", annualLeaveBalance: 15 },
  { id: 2, name: "Noah", annualLeaveBalance: 10 }
]

requests:
[
  { id: 101, employeeId: 1, ... },
  { id: 102, employeeId: 1, ... }
]

Sample output:
[
  { id: 1, name: "Ava", annualLeaveBalance: 15, requests: [/* two requests *\/] },
  { id: 2, name: "Noah", annualLeaveBalance: 10, requests: [] }
]
*/
export function mergeEmployeesWithLeaveRequests(
  employees: Employee[],
  requests: LeaveRequest[],
): EmployeeWithRequests[] {
  // TODO:
  // Group requests by employeeId, then map employees to enriched objects.

  const totalRequests = requests.reduce((acc, req) => {
    if (!acc[req.employeeId]) {
      acc[req.employeeId] = []
    }

    acc[req.employeeId].push(req)

    return acc
  }, {} as Record<number, LeaveRequest[]>)

  return employees.map(emp => ({
    ...emp,
    requests: totalRequests[emp.id] || []
  }))


}
