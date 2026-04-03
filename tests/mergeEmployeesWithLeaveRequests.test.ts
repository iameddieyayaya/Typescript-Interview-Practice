import { describe, expect, it } from "vitest";
// import { mergeEmployeesWithLeaveRequests } from "../src/solutions/mergeEmployeesWithLeaveRequests";
import { mergeEmployeesWithLeaveRequests } from "../src/prompts/mergeEmployeesWithLeaveRequests";
import { employeesFixture, leaveRequestsFixture } from "./fixtures";

describe("mergeEmployeesWithLeaveRequests", () => {
  it("attaches requests to the matching employee", () => {
    const merged = mergeEmployeesWithLeaveRequests(employeesFixture, leaveRequestsFixture);
    const [firstEmployee, secondEmployee, thirdEmployee] = merged;

    expect(merged).toHaveLength(3);
    expect(firstEmployee).toBeDefined();
    expect(secondEmployee).toBeDefined();
    expect(thirdEmployee).toBeDefined();
    expect(firstEmployee?.requests).toHaveLength(2);
    expect(secondEmployee?.requests).toHaveLength(1);
    expect(thirdEmployee?.requests).toHaveLength(1);
  });

  it("gives employees without requests an empty array", () => {
    expect(
      mergeEmployeesWithLeaveRequests([{ id: 10, name: "Zoe Kim", annualLeaveBalance: 20 }], []),
    ).toEqual([
      {
        id: 10,
        name: "Zoe Kim",
        annualLeaveBalance: 20,
        requests: [],
      },
    ]);
  });
});
