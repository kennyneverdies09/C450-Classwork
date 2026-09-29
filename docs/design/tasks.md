# Tasks — Video Game Collection Library (VGC Library)

Derived from `plan.md` and the approved specification. This task list focuses on front-end development using HTML, CSS, JavaScript, a local JavaScript dataset, and browser localStorage.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|-------------------------|------------|--------|
| T1 | Review the existing course web app template and identify the HTML, CSS, JavaScript, asset, and navigation files to reuse. | ADR-01 | — | Done |
| T2 | Run the unchanged template and record existing layout, navigation, and browser-console issues. | ADR-01 | T1 | Done |
| T3 | Organize the front-end files for page markup, styles, application logic, local game data, and image assets. | ADR-01, ADR-02 | T1, T2 | Done |
| T4 | Define the JavaScript game-record structure with all fields required by the specification. | R4, R12, R13, R20, R22, R23, R25, ADR-02, ADR-06, ADR-07 | T3 | Done |
| T5 | Create exactly 12 complete sample game records with unique IDs. | R20, ADR-02 | T4 | Done |
| T6 | Include at least one multi-platform owned game and one unreleased, not-owned Want to Play game with a future release date. | R20-R25, ADR-06, ADR-09 | T5 | Done |
| T7 | Validate that all 12 records contain the required fields and supported status values. | R20-R25, ADR-02 | T5, T6 | Done |
| T8 | Create the shared JavaScript application state and a common update-and-render pattern for all editable fields. | R1, R9-R13, R18, R20-R25, ADR-11 | T7 | Done |
| T9 | Build the page structure for the library controls, collection area, detail view, and feedback messages. | R1-R4, R15-R17, ADR-01, ADR-12 | T3 | Done |
| T10 | Build the default card-view renderer from the shared application state. | R1, R2, ADR-04, ADR-11 | T8, T9 | Done |
| T11 | Display each card's cover, title, ownership state, owned platform or platforms, and status. | R2, R22, ADR-04, ADR-06 | T10 | Done |
| T12 | Add useful alternative text to each game-cover image. | R2, ADR-13 | T11 | Done |
| T13 | Test that all 12 games and all required card information appear in the default view. | R1, R2, R20 | T10, T11, T12 | Done |
| T14 | Build selection behavior that opens one game's detail view. | R4, ADR-12 | T8, T9, T10 | Done |
| T15 | Display all required information for the selected game in the detail view. | R4, R13, R22-R25 | T14 | Done |
| T16 | Add a back control that returns from the detail view to the library. | R17, ADR-12 | T14 | Done |
| T17 | Build the compact list-view renderer from the same shared application state. | R3, ADR-04, ADR-11 | T8, T10 | Done |
| T18 | Add the card/list view switch and use card view as the initial default. | R2, R3, ADR-04 | T10, T17 | Done |
| T19 | Test that switching views preserves the same collection data. | R2, R3 | T18 | Done |
| T20 | Create shared search and filter state plus one client-side filtering function. | R5-R8, R15, R16, ADR-05, ADR-11 | T8, T10, T17 | Done |
| T21 | Add a title-search input and connect it to the shared filtering function. | R5, R16, ADR-05 | T20 | Done |
| T22 | Add status, platform, and Favorites controls and connect them to the shared filtering function. | R6-R8, R16, ADR-05 | T20 | Done |
| T23 | Display the active search term and active filters. | R16, ADR-05 | T21, T22 | Done |
| T24 | Display a clear no-results message when active criteria return no games. | R15, ADR-05 | T20, T21, T22 | Done |
| T25 | Perform development testing of search, each filter, combined criteria, active indicators, and the no-results state in both collection views. | R5-R8, R15, R16 | T20, T21, T22, T23, T24 | Done |
| T26 | Add a status editor with Want to Play, Not Started, Playing, Completed, and No Longer Interested. | R9, R21, R24, R25, ADR-08, ADR-09 | T14, T15 | Done |
| T27 | Update the shared state and visible views immediately after a status change. | R9, ADR-11 | T8, T26 | Done |
| T28 | Remove the obsolete Dropped explanation after the status revision. | R24, ADR-07 | T26, T27 | Done |
| T29 | Add a control that marks or unmarks a game as a favorite. | R10, R11 | T14, T15 | Done |
| T30 | Synchronize favorite indicators across card, list, detail, and Favorites-filter views. | R8, R10, R11, ADR-11 | T8, T22, T29 | Done |
| T31 | Add owned/not-owned and multiple-platform editing controls. | R12, R21, R22, R25, ADR-06 | T14, T15 | Done |
| T32 | Display every associated owned platform in card, list, and detail views. | R12, R22, ADR-06, ADR-11 | T8, T31 | Done |
| T33 | Add Physical and Digital ownership-type choices separately for each owned platform. | R23, ADR-11 | T31 | Done |
| T34 | Display each platform's selected ownership types in the detail view. | R4, R23, ADR-11 | T8, T33 | Done |
| T35 | Add a numeric completion-percentage field for a Playing game. | R13, ADR-10 | T26 | Done |
| T36 | Accept only whole-number completion values from 0 through 100. | R13, R14, ADR-10 | T35 | Done |
| T37 | Reject invalid completion values and display a clear validation message. | R14, ADR-10 | T36 | Done |
| T38 | Implement unreleased-game behavior so a game can remain not owned while marked Want to Play and display its future release date. | R21, R25, ADR-09 | T6, T15, T26, T31 | Done |
| T39 | Define the localStorage data structure and validation rules for status, favorites, ownership/platform, ownership type, completion percentage, and view preference. | R18, R19, ADR-02 | T18, T27, T30, T31, T32, T33, T34, T35, T36 | Done |
| T40 | Implement safe loading of valid saved values into shared application state. | R18, R19, ADR-02, ADR-11 | T39 | Done |
| T41 | Implement saving and unavailable-storage fallback so the app continues in memory when localStorage cannot be used. | R18, R19, ADR-02 | T39, T40 | Done |
| T42 | Test refresh persistence, invalid stored data, and blocked-storage behavior. | R18, R19 | T39, T40, T41 | Done |
| T43 | Audit all interactive controls for clear labels, native semantics, keyboard operation, visible focus, logical focus order, and non-color state indicators, then correct any issues. | R2-R17, R23-R25, ADR-13 | T18, T21, T22, T26, T29, T31, T33, T35 | Done |
| T44 | Check text contrast, image alternative text, keyboard operation, and readable validation messages. | R1-R17, R21-R25, ADR-13 | T12, T37, T43 | Done |
| T45 | Refine the CSS so the control area, card view, list view, detail view, and editing controls work at smaller viewport widths. | R1-R8, R16, R17, ADR-01 | T24, T30, T34, T37 | Done |
| T46 | Test the interface at desktop and smaller viewport widths and correct overflow or unreadable controls. | R1-R17, R21-R25 | T45 | Done |
| T47 | Test valid and invalid completion inputs, including 60, -1, and 101. | R13, R14 | T35, T36, T37 | Done |
| T48 | Test two owned platforms with independent ownership types, including both types on one platform. | R12, R22, R23 | T31, T32, T33, T34, T57, T58 | Done |
| T49 | Test all five status values, the No Longer Interested revision, favorite changes, and the unreleased Want to Play workflow. | R9-R11, R21, R24, R25 | T26, T27, T28, T29, T30, T38 | Done |
| T50 | Execute and record the formal acceptance test for every requirement from R1 through R26 in the local browser build. | R1-R26 | T13, T16, T19, T25, T28, T30, T32, T33, T34, T37, T38, T42, T44, T46, T47, T48, T49, T56, T57, T58 | Done |
| T51 | Conduct the prototype success test for finding a game, identifying its platform, opening details, changing status, marking it favorite, and returning to the library in under two minutes without assistance. | R2, R4, R5, R9, R10, R17 | T50 | Done |
| T52 | Verify the completed front end contains no features or behaviors outside the approved specification. | R1-R26, ADR-00-ADR-13 | T50 | Done |
| T53 | Verify the deployed GitHub Pages version loads its HTML, CSS, JavaScript, local data, images, and navigation correctly. | R1-R26, ADR-01, ADR-02, ADR-10, ADR-11, ADR-12, ADR-13 | T52 | Done |
| T54 | Repeat critical view, search, filter, detail, editing, persistence, and unavailable-storage tests on the deployed front end. | R1-R26 | T53 | Done |
| T55 | Review the completed implementation, acceptance-test results, and deployed application against `plan.md` and the approved specification before project sign-off. | R1-R26, ADR-00-ADR-13 | T54 | Done |
| T56 | Display announced release platforms separately for unreleased games. | R26, ADR-10 | T15, T38 | Done |
| T57 | Add and display Physical/Digital ownership type separately for each owned platform. | R23, ADR-11 | T31, T33, T34, T39 | Done |
| T58 | Allow Physical and Digital ownership toggles to be selected together for one owned platform. | R23, ADR-11 | T57 | Done |
| T59 | Apply the approved VGC Library design system to the page shell, navigation, collection, detail view, and controls. | ADR-00, ADR-13 | T45, T46, T52 | Done |
| T60 | Replace remote placeholder images with original funny local cover tiles. | ADR-00, ADR-13 | T12, T52, T59 | Done |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done

- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done.
- No task marked done without a test passing.

## Blocked / Questions

| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| T53 | No deployed GitHub Pages URL, workflow, or CNAME configuration is present in the workspace. | 2026-09-28 | 2026-09-28 — verified at https://kennyneverdies09.github.io/C450-Classwork/#/ |

## Quick Self-Check Before You Start Building

- [ ] Every task traces to a requirement or ADR
- [ ] Every task is small enough to finish in under a day
- [ ] Order matches plan.md's sequencing (riskiest/most depended-on first)
- [ ] No task is vague enough that "done" is a judgment call
- [ ] Blocked items are logged, not silently skipped

If any box is unchecked, refine the task list before writing code.

## Revision History

| Date | Revision | Impact |
|------|----------|--------|
| 2026-09-28 | Recorded completed implementation tasks through T22. | At the time of this entry, no task was added for planned release platforms because that behavior was not in the approved specification. |
| 2026-09-28 | Added approved task T56 for release-platform display. | T56 will keep `releasePlatforms` separate from owned `platforms` and display PS5 for Grand Theft Auto VI. |
| 2026-09-28 | Revised the status workflow from Dropped to No Longer Interested. | T26 now uses the new status and T28 records removal of the obsolete explanation. |
| 2026-09-28 | Approved per-platform ownership types and added T57. | T57 will replace the game-wide ownership type behavior with `platformOwnership`. |
| 2026-09-28 | Approved both ownership types per platform and added T58. | T58 will make Physical and Digital independent toggles for each owned system. |
| 2026-09-28 | Added and completed T59 for design-system implementation. | Applied the approved VGC Library visual system without changing application behavior. |
| 2026-09-28 | Added and completed T60 for original funny cover placeholders. | Replaced remote placeholder image presentation with local original cover tiles without changing game data or behavior. |
