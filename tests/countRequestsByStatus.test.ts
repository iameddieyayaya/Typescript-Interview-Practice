import { describe, expect, it } from "vitest";
// import { countRequestsByStatus } from "../src/solutions/countRequestsByStatus";
import { countRequestsByStatus } from "../src/prompts/countRequestsByStatus";
import { leaveRequestsFixture } from "./fixtures";

describe("countRequestsByStatus", () => {
  it("counts each status", () => {
    expect(countRequestsByStatus(leaveRequestsFixture)).toEqual({
      pending: 1,
      approved: 2,
      denied: 1,
    });
  });

  it("returns zeroes for an empty list", () => {
    expect(countRequestsByStatus([])).toEqual({
      pending: 0,
      approved: 0,
      denied: 0,
    });
  });
});
