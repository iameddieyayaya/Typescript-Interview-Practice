import type { LeaveRequest, LeaveStatus } from "../types/leave";

const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function isIsoDateString(value: string): boolean {
  if (!ISO_DATE_PATTERN.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

export function compareIsoDates(left: string, right: string): number {
  return left.localeCompare(right);
}

export function dateRangeOverlaps(
  firstStart: string,
  firstEnd: string,
  secondStart: string,
  secondEnd: string,
): boolean {
  return compareIsoDates(firstStart, secondEnd) <= 0 && compareIsoDates(secondStart, firstEnd) <= 0;
}

export function differenceInWholeDays(laterDate: string, earlierDate: string): number {
  const later = new Date(`${laterDate}T00:00:00.000Z`);
  const earlier = new Date(`${earlierDate}T00:00:00.000Z`);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;

  return Math.floor((later.getTime() - earlier.getTime()) / millisecondsPerDay);
}

const STATUS_SORT_ORDER: Record<LeaveStatus, number> = {
  pending: 0,
  approved: 1,
  denied: 2,
};

export function compareDashboardRequests(left: LeaveRequest, right: LeaveRequest): number {
  const leftOrder = STATUS_SORT_ORDER[left.status];
  const rightOrder = STATUS_SORT_ORDER[right.status];
  const statusDifference = leftOrder - rightOrder;

  if (statusDifference !== 0) {
    return statusDifference;
  }

  return compareIsoDates(right.startDate, left.startDate);
}
