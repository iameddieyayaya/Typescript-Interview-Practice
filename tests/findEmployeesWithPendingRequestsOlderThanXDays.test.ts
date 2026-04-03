import { describe, expect, it } from "vitest";
// import { findEmployeesWithPendingRequestsOlderThanXDays } from "../src/solutions/findEmployeesWithPendingRequestsOlderThanXDays";
import { findEmployeesWithPendingRequestsOlderThanXDays } from "../src/prompts/findEmployeesWithPendingRequestsOlderThanXDays";

describe("findEmployeesWithPendingRequestsOlderThanXDays", () => {
  const requests = [
    { status: "pending" as const, createdAt: "2026-04-01" },
    { status: "approved" as const, createdAt: "2026-04-01" },
    { status: "pending" as const, createdAt: "2026-04-08" },
    { status: "pending" as const, createdAt: "2026-04-12" },
  ];

  it("returns only pending requests older than the threshold", () => {
    expect(findEmployeesWithPendingRequestsOlderThanXDays("2026-04-15", requests, 7)).toEqual([
      { status: "pending", createdAt: "2026-04-01" },
    ]);
  });

  it("does not include requests exactly on the threshold", () => {
    expect(findEmployeesWithPendingRequestsOlderThanXDays("2026-04-15", requests, 3)).toEqual([
      { status: "pending", createdAt: "2026-04-01" },
      { status: "pending", createdAt: "2026-04-08" },
    ]);
  });
});
