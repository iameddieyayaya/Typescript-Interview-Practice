import type {
  BasicLeaveRequestInput,
  Employee,
  EmployeeWithRequests,
  LeaveRequest,
  ValidationResult,
} from "../types/leave";

/*
Mock interview file

Use this file for one-file screen-share practice.
Try solving the prompts below from top to bottom without opening the reference solutions.
*/

/*
Prompt 1: Group leave requests by employee

Given a list of leave requests like:
[
  { employeeId: 1, status: "approved", days: 3 },
  { employeeId: 1, status: "pending", days: 2 },
  { employeeId: 2, status: "approved", days: 5 }
]
Return total requested days per employee.

Expected output:
{ 1: 5, 2: 5 }
*/
export function groupLeaveRequestsByEmployeeForMockInterview(
  requests: Pick<LeaveRequest, "employeeId" | "days">[],
): Record<number, number> {
  // TODO
  throw new Error("TODO: implement groupLeaveRequestsByEmployeeForMockInterview");
}

/*
Prompt 2: Normalize and validate leave request data

Validate:
- employeeId exists
- start date exists
- end date exists
- start date is before or equal to end date
- status is one of: pending, approved, denied

Return a normalized object or a structured validation error.
*/
export function normalizeAndValidateLeaveRequestDataForMockInterview(
  input: BasicLeaveRequestInput,
): ValidationResult {
  // TODO
  throw new Error("TODO: implement normalizeAndValidateLeaveRequestDataForMockInterview");
}

/*
Prompt 3: Merge employees with leave requests

Given a list of employees and a list of leave requests, return employees enriched with their requests.
Use efficient lookup logic rather than nested loops where possible.
*/
export function mergeEmployeesWithLeaveRequestsForMockInterview(
  employees: Employee[],
  requests: LeaveRequest[],
): EmployeeWithRequests[] {
  // TODO
  throw new Error("TODO: implement mergeEmployeesWithLeaveRequestsForMockInterview");
}
