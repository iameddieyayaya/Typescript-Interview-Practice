# Leave Management Interview Practice

Small TypeScript repo for practical coding-screen prep. The exercises focus on one-file scripting tasks, simple data structures, readable implementations, and edge-case handling in an HR / leave-management domain.

## Project Structure

```text
.
├── src
│   ├── prompts
│   ├── solutions
│   └── types
├── tests
├── index.ts
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

## Install

```bash
npm install
```

## Run Tests

Run the full suite:

```bash
npm test
```

Watch mode while practicing:

```bash
npm run test:watch
```

## Practice One Prompt at a Time

Pick a starter file in `src/prompts`, implement it locally, and compare it with the matching file in `src/solutions`.

Run a single exercise test file:

```bash
npm run test:one -- tests/groupLeaveRequestsByEmployee.test.ts
```

Examples:

```bash
npm run test:one -- tests/detectOverlappingLeaveRequests.test.ts
npm run test:one -- tests/normalizeAndValidateLeaveRequestData.test.ts
```

## Suggested Interview Workflow

1. Read the prompt comments and restate the problem in your own words.
2. Clarify assumptions before coding.
3. Start with the simplest correct approach.
4. Add edge-case handling once the core path works.
5. Explain time and space complexity in plain language.
6. Run the matching test file and tighten the solution if needed.

## How to Practice Out Loud

- Clarify assumptions before touching the keyboard.
- State time and space complexity simply.
- Implement a straightforward solution first.
- Call out edge cases before coding.
- Narrate tradeoffs while solving.

## Exercise Map

Each exercise has:

- a starter prompt file with comments, examples, and a `TODO`
- a completed reference solution
- matching automated tests

Exercises included:

1. Group leave requests by employee
2. Detect overlapping leave requests
3. Count requests by status
4. Remaining leave balance per employee
5. Normalize and validate leave request data
6. Merge employees with leave requests
7. Find employees with pending requests older than X days
8. Sort leave requests for dashboard display
9. Generate leave summary report
10. Detect duplicate leave submissions

## Mock Interview

Use `src/prompts/mock-interview.ts` for a single-file screen-share style session. It contains three prompts in the format many practical interviews use: comments, starter signatures, and examples in one file.

## Notes

- No third-party runtime libraries are used.
- Solutions favor readability and defensible tradeoffs over cleverness.
- Shared types live in `src/types/leave.ts`.
