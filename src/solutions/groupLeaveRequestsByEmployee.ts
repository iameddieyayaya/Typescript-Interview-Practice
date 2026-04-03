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

export function groupLeaveRequestsByEmployee(
  requests: BasicLeaveRequest[],
): LeaveDaysByEmployee {
  return requests.reduce<LeaveDaysByEmployee>((totals, request) => {
    totals[request.employeeId] = (totals[request.employeeId] ?? 0) + request.days;
    return totals;
  }, {});
}

export function countLeaveRequestsByEmployee(
  requests: BasicLeaveRequest[],
): Record<number, number> {
  return requests.reduce<Record<number, number>>((counts, request) => {
    counts[request.employeeId] = (counts[request.employeeId] ?? 0) + 1;
    return counts;
  }, {});
}

export function groupLeaveRequestsByType(
  requests: LeaveRequestWithType[],
): Partial<LeaveRequestsByType> {
  return requests.reduce<Partial<LeaveRequestsByType>>((grouped, request) => {
    const existingGroup = grouped[request.type] ?? [];
    existingGroup.push(request);
    grouped[request.type] = existingGroup;
    return grouped;
  }, {});
}

export function getEmployeesWithMoreThanNDays(
  requests: BasicLeaveRequest[],
  minDays: number,
): number[] {
  return Object.entries(groupLeaveRequestsByEmployee(requests))
    .filter(([, totalDays]) => totalDays > minDays)
    .map(([employeeId]) => Number(employeeId));
}

export function getTotalLeaveDays(requests: BasicLeaveRequest[]): number {
  return requests.reduce((totalDays, request) => totalDays + request.days, 0);
}

export function getAverageLeaveDaysPerRequest(
  requests: BasicLeaveRequest[],
): number {
  if (requests.length === 0) {
    return 0;
  }

  return getTotalLeaveDays(requests) / requests.length;
}

export function getMaxLeaveRequest<T extends BasicLeaveRequest>(
  requests: T[],
): T | undefined {
  return requests.reduce<T | undefined>((maxRequest, currentRequest) => {
    if (!maxRequest || currentRequest.days > maxRequest.days) {
      return currentRequest;
    }

    return maxRequest;
  }, undefined);
}

export function normalizeLeaveRequests(
  requests: BasicLeaveRequest[],
): NormalizedLeaveRequest[] {
  return requests.map((request) => ({
    employeeId: request.employeeId,
    days: request.days,
    isLongLeave: request.days > 5,
  }));
}

export function groupAndSumByEmployeeAndType(
  requests: LeaveRequestWithType[],
): LeaveDaysByEmployeeAndType {
  return requests.reduce<LeaveDaysByEmployeeAndType>((result, request) => {
    const employeeTotals = result[request.employeeId] ?? {};
    employeeTotals[request.type] = (employeeTotals[request.type] ?? 0) + request.days;
    result[request.employeeId] = employeeTotals;
    return result;
  }, {});
}

export function getTopKEmployeesByLeaveDays(
  requests: BasicLeaveRequest[],
  k: number,
): number[] {
  if (k <= 0) {
    return [];
  }

  return Object.entries(groupLeaveRequestsByEmployee(requests))
    .map(([employeeId, totalDays]) => ({
      employeeId: Number(employeeId),
      totalDays,
    }))
    .sort((left, right) => {
      if (right.totalDays !== left.totalDays) {
        return right.totalDays - left.totalDays;
      }

      return left.employeeId - right.employeeId;
    })
    .slice(0, k)
    .map(({ employeeId }) => employeeId);
}
