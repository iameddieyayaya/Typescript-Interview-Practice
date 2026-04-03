import type { LeaveDaysByEmployee, LeaveRequest } from "../types/leave";

export type BasicLeaveRequest = Pick<LeaveRequest, "employeeId" | "days">;
export type LeaveRequestType = "vacation" | "sick" | "personal" | "unpaid";

export interface LeaveRequestWithType extends BasicLeaveRequest {
  type: LeaveRequestType;
}

export interface NormalizedLeaveRequest {
  employeeId: number;
  days: number;
  isLongLeave: boolean;
}

export type LeaveRequestsByType = Record<LeaveRequestType, LeaveRequestWithType[]>;
export type LeaveDaysByEmployeeAndType = Record<number, Partial<Record<LeaveRequestType, number>>>;

/*
Interview-style array transformation exercises.

Use `reduce` when you want to turn an array into one accumulated result:
- totals
- grouped objects
- maximum values

Use `map` when you want one output item for each input item.
Use `filter` when you want to keep only matching items.
*/

/*
1. groupLeaveRequestsByEmployee
Return total leave days per employee.

Example:
[
  { employeeId: 1, days: 3 },
  { employeeId: 1, days: 2 },
  { employeeId: 2, days: 5 }
]

Output:
{ 1: 5, 2: 5 }
*/
export function groupLeaveRequestsByEmployee(
  requests: BasicLeaveRequest[],
): LeaveDaysByEmployee {
  // TODO:
  // Return total leave days per employee
  throw new Error("TODO: implement groupLeaveRequestByEmployee")
}

/*
2. countLeaveRequestsByEmployee
Return the number of requests submitted by each employee.
*/
export function countLeaveRequestsByEmployee(
  requests: BasicLeaveRequest[],
): Record<number, number> {
  // TODO:
  // Count how many times each employeeId appears.
  throw new Error("TODO: implement countLeaveRequestsByEmployee");
}

/*
3. groupLeaveRequestsByType
Input includes a `type` such as vacation, sick, personal, or unpaid.
Return an object where each type maps to an array of requests.
*/
export function groupLeaveRequestsByType(
  requests: LeaveRequestWithType[],
): Partial<LeaveRequestsByType> {
  // TODO:
  // Group each request into the correct array by type.
  throw new Error("TODO: implement groupLeaveRequestsByType");
}

/*
4. getEmployeesWithMoreThanNDays
Return the employeeIds whose total leave days are greater than `minDays`.
*/
export function getEmployeesWithMoreThanNDays(
  requests: BasicLeaveRequest[],
  minDays: number,
): number[] {
  // TODO:
  // Reuse the grouped totals if helpful.
  // Return only employeeIds whose total is > minDays.
  throw new Error("TODO: implement getEmployeesWithMoreThanNDays");
}

/*
5. getTotalLeaveDays
Return the total days across all requests.
*/
export function getTotalLeaveDays(requests: BasicLeaveRequest[]): number {
  // TODO:
  // Sum the days across the whole array.
  throw new Error("TODO: implement getTotalLeaveDays");
}

/*
6. getAverageLeaveDaysPerRequest
Return the average number of days per request.
Return 0 for an empty array.
*/
export function getAverageLeaveDaysPerRequest(
  requests: BasicLeaveRequest[],
): number {
  // TODO:
  // Guard against empty input.
  // Divide total days by request count.
  throw new Error("TODO: implement getAverageLeaveDaysPerRequest");
}

/*
7. getMaxLeaveRequest
Return the request with the highest number of days.
Return `undefined` for an empty array.
*/
export function getMaxLeaveRequest<T extends BasicLeaveRequest>(
  requests: T[],
): T | undefined {
  // TODO:
  // Track the largest request seen so far.
  throw new Error("TODO: implement getMaxLeaveRequest");
}

/*
8. normalizeLeaveRequests
Return a new array with:
{ employeeId, days, isLongLeave }
where isLongLeave is true when days > 5.
*/
export function normalizeLeaveRequests(
  requests: BasicLeaveRequest[],
): NormalizedLeaveRequest[] {
  // TODO:
  // Use map to produce a new shape for each request.
  throw new Error("TODO: implement normalizeLeaveRequests");
}

/*
9. groupAndSumByEmployeeAndType
Return nested totals in this shape:
{
  [employeeId]: {
    [type]: totalDays
  }
}
*/
export function groupAndSumByEmployeeAndType(
  requests: LeaveRequestWithType[],
): LeaveDaysByEmployeeAndType {
  // TODO:
  // Build a nested object.
  // Group first by employeeId, then by type, summing days.
  throw new Error("TODO: implement groupAndSumByEmployeeAndType");
}

/*
10. getTopKEmployeesByLeaveDays
Return the top K employeeIds sorted by total leave days descending.
Break ties by smaller employeeId first.
Return an empty array when k <= 0.
*/
export function getTopKEmployeesByLeaveDays(
  requests: BasicLeaveRequest[],
  k: number,
): number[] {
  // TODO:
  // Compute total days per employee.
  // Sort by total descending, then employeeId ascending.
  // Return only the top K employeeIds.
  throw new Error("TODO: implement getTopKEmployeesByLeaveDays");
}
