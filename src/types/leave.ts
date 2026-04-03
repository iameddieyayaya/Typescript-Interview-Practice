export type LeaveStatus = "pending" | "approved" | "denied";

export type LeaveType = "vacation" | "sick" | "personal" | "unpaid";

export interface Employee {
  id: number;
  name: string;
  annualLeaveBalance: number;
}

export interface LeaveRequest {
  id: number;
  employeeId: number;
  status: LeaveStatus;
  days: number;
  startDate: string;
  endDate: string;
  createdAt: string;
  leaveType?: LeaveType;
}

export interface BasicLeaveRequestInput {
  employeeId?: number;
  startDate?: string;
  endDate?: string;
  status?: string;
  days?: number;
  createdAt?: string;
  leaveType?: string;
}

export interface NormalizedLeaveRequest {
  employeeId: number;
  startDate: string;
  endDate: string;
  status: LeaveStatus;
  days: number;
  createdAt?: string;
  leaveType?: LeaveType;
}

export interface ValidationIssue {
  field: "employeeId" | "startDate" | "endDate" | "status" | "leaveType" | "days";
  message: string;
}

export interface ValidationErrorResult {
  ok: false;
  errors: ValidationIssue[];
}

export interface ValidationSuccessResult {
  ok: true;
  value: NormalizedLeaveRequest;
}

export type ValidationResult = ValidationErrorResult | ValidationSuccessResult;

export type LeaveDaysByEmployee = Record<number, number>;

export type RequestCountsByStatus = Record<LeaveStatus, number>;

export interface EmployeeRemainingBalance {
  employeeId: number;
  name: string;
  annualLeaveBalance: number;
  approvedDaysTaken: number;
  remainingBalance: number;
}

export interface EmployeeWithRequests extends Employee {
  requests: LeaveRequest[];
}

export interface LeaveSummaryReport {
  totalRequests: number;
  totalApprovedDays: number;
  totalPendingRequests: number;
  mostCommonLeaveType: LeaveType | null;
}
