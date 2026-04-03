import type { Employee, LeaveRequest } from "../src/types/leave";

export const employeesFixture: Employee[] = [
  { id: 1, name: "Ava Chen", annualLeaveBalance: 15 },
  { id: 2, name: "Noah Patel", annualLeaveBalance: 10 },
  { id: 3, name: "Mia Rivera", annualLeaveBalance: 5 },
];

export const leaveRequestsFixture: LeaveRequest[] = [
  {
    id: 101,
    employeeId: 1,
    status: "approved",
    days: 3,
    startDate: "2026-05-01",
    endDate: "2026-05-03",
    createdAt: "2026-04-01",
    leaveType: "vacation",
  },
  {
    id: 102,
    employeeId: 1,
    status: "pending",
    days: 2,
    startDate: "2026-06-10",
    endDate: "2026-06-11",
    createdAt: "2026-04-02",
    leaveType: "vacation",
  },
  {
    id: 103,
    employeeId: 2,
    status: "approved",
    days: 5,
    startDate: "2026-07-20",
    endDate: "2026-07-24",
    createdAt: "2026-04-05",
    leaveType: "sick",
  },
  {
    id: 104,
    employeeId: 3,
    status: "denied",
    days: 4,
    startDate: "2026-08-10",
    endDate: "2026-08-13",
    createdAt: "2026-04-09",
    leaveType: "personal",
  },
];
