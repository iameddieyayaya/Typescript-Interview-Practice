import type {
  BasicLeaveRequestInput,
  LeaveStatus,
  LeaveType,
  NormalizedLeaveRequest,
  ValidationIssue,
  ValidationResult,
} from "../types/leave";
import { compareIsoDates, isIsoDateString } from "./helpers";

const VALID_STATUSES: LeaveStatus[] = ["pending", "approved", "denied"];
const VALID_LEAVE_TYPES: LeaveType[] = ["vacation", "sick", "personal", "unpaid"];

export function normalizeAndValidateLeaveRequestData(input: BasicLeaveRequestInput): ValidationResult {
  const errors: ValidationIssue[] = [];

  const employeeId = input.employeeId;
  if (typeof employeeId !== "number" || Number.isNaN(employeeId)) {
    errors.push({ field: "employeeId", message: "employeeId is required and must be a number." });
  }

  const startDate = input.startDate?.trim();
  if (!startDate) {
    errors.push({ field: "startDate", message: "startDate is required." });
  } else if (!isIsoDateString(startDate)) {
    errors.push({ field: "startDate", message: "startDate must be a valid YYYY-MM-DD date string." });
  }

  const endDate = input.endDate?.trim();
  if (!endDate) {
    errors.push({ field: "endDate", message: "endDate is required." });
  } else if (!isIsoDateString(endDate)) {
    errors.push({ field: "endDate", message: "endDate must be a valid YYYY-MM-DD date string." });
  }

  const normalizedStatus = input.status?.trim().toLowerCase();
  if (!normalizedStatus) {
    errors.push({ field: "status", message: "status is required." });
  } else if (!VALID_STATUSES.includes(normalizedStatus as LeaveStatus)) {
    errors.push({ field: "status", message: "status must be one of: pending, approved, denied." });
  }

  let normalizedLeaveType: LeaveType | undefined;
  if (input.leaveType !== undefined) {
    const candidateLeaveType = input.leaveType.trim().toLowerCase();
    if (!VALID_LEAVE_TYPES.includes(candidateLeaveType as LeaveType)) {
      errors.push({
        field: "leaveType",
        message: "leaveType must be one of: vacation, sick, personal, unpaid.",
      });
    } else {
      normalizedLeaveType = candidateLeaveType as LeaveType;
    }
  }

  const days = input.days ?? 0;
  if (typeof days !== "number" || Number.isNaN(days) || days < 0) {
    errors.push({ field: "days", message: "days must be a non-negative number when provided." });
  }

  if (startDate && endDate && isIsoDateString(startDate) && isIsoDateString(endDate)) {
    if (compareIsoDates(startDate, endDate) > 0) {
      errors.push({ field: "startDate", message: "startDate must be before or equal to endDate." });
    }
  }

  if (errors.length > 0) {
    return {
      ok: false,
      errors,
    };
  }

  const value: NormalizedLeaveRequest = {
    employeeId: employeeId as number,
    startDate: startDate as string,
    endDate: endDate as string,
    status: normalizedStatus as LeaveStatus,
    days,
  };

  if (input.createdAt) {
    value.createdAt = input.createdAt.trim();
  }

  if (normalizedLeaveType) {
    value.leaveType = normalizedLeaveType;
  }

  return {
    ok: true,
    value,
  };
}
