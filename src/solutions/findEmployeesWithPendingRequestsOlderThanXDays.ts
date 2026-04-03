import type { LeaveRequest } from "../types/leave";
import { differenceInWholeDays } from "./helpers";

export function findEmployeesWithPendingRequestsOlderThanXDays(
  today: string,
  requests: Pick<LeaveRequest, "status" | "createdAt">[],
  minimumAgeInDays: number,
): Pick<LeaveRequest, "status" | "createdAt">[] {
  return requests.filter((request) => {
    if (request.status !== "pending") {
      return false;
    }

    return differenceInWholeDays(today, request.createdAt) > minimumAgeInDays;
  });
}
