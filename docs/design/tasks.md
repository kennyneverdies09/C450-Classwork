# Tasks — Video Game Collection Library (VGC Library)

Derived from `plan.md` and the approved specification. This task list focuses on front-end development using HTML, CSS, JavaScript, a local JavaScript dataset, and browser localStorage.

## Task List

| ID | Task | Traces to (R# / ADR#) | Depends on | Status |
|----|------|-------------------------|------------|--------|
| T1 | Review the existing course web app template and identify the HTML, CSS, JavaScript, asset, and navigation files to reuse. | ADR-01 | — | Not started |
| T2 | Run the unchanged template and record existing layout, navigation, and browser-console issues. | ADR-01 | T1 | Not started |
| T3 | Organize the front-end files for page markup, styles, application logic, local game data, and image assets. | ADR-01, ADR-02 | T1, T2 | Not started |
| T4 | Define the JavaScript game-record structure with all fields required by the specification. | R4, R12, R13, R20, R22, R23, R25, ADR-02, ADR-06, ADR-07 | T3 | Not started |
| T5 | Create exactly 12 complete sample game records with unique IDs. | R20, ADR-02 | T4 | Not started |
| T6 | Include at least one multi-platform owned game and one unreleased, not-owned Want to Play game with a future release date. | R20-R25, ADR-06, ADR-09 | T5 | Not started |
| T7 | Validate that all 12 records contain the required fields and supported status values. | R20-R25, ADR-02 | T5, T6 | Not started |
| T8 | Create the shared JavaScript application state and a common update-and-render pattern for all editable fields. | R1, R9-R13, R18, R20-R25, ADR-11 | T7 | Not started |
| T9 | Build the page structure for the library controls, collection area, detail view, and feedback messages. | R1-R4, R15-R17, ADR-01, ADR-12 | T3 | Not started |
| T10 | Build the default card-view renderer from the shared application state. | R1, R2, ADR-04, ADR-11 | T8, T9 | Not started |
| T11 | Display each card's cover, title, ownership state, owned platform or platforms, and status. | R2, R22, ADR-04, ADR-06 | T10 | Not started |
| T12 | Add useful alternative text to each game-cover image. | R2, ADR-13 | T11 | Not started |
| T13 | Test that all 12 games and all required card information appear in the default view. | R1, R2, R20 | T10, T11, T12 | Not started |
| T14 | Build selection behavior that opens one game's detail view. | R4, ADR-12 | T8, T9, T10 | Not started |
| T15 | Display all required information for the selected game in the detail view. | R4, R13, R22-R25 | T14 | Not started |
| T16 | Add a back control that returns from the detail view to the library. | R17, ADR-12 | T14 | Not started |
| T17 | Build the compact list-view renderer from the same shared application state. | R3, ADR-04, ADR-11 | T8, T10 | Not started |
| T18 | Add the card/list view switch and use card view as the initial default. | R2, R3, ADR-04 | T10, T17 | Not started |
| T19 | Test that switching views preserves the same collection data. | R2, R3 | T18 | Not started |
| T20 | Create shared search and filter state plus one client-side filtering function. | R5-R8, R15, R16, ADR-05, ADR-11 | T8, T10, T17 | Not started |
| T21 | Add a title-search input and connect it to the shared filtering function. | R5, R16, ADR-05 | T20 | Not started |
| T22 | Add status, platform, and Favorites controls and connect them to the shared filtering function. | R6-R8, R16, ADR-05 | T20 | Not started |
| T23 | Display the active search term and active filters. | R16, ADR-05 | T21, T22 | Not started |
| T24 | Display a clear no-results message when active criteria return no games. | R15, ADR-05 | T20, T21, T22 | Not started |
| T25 | Perform development testing of search, each filter, combined criteria, active indicators, and the no-results state in both collection views. | R5-R8, R15, R16 | T20, T21, T22, T23, T24 | Not started |
| T26 | Add a status editor with Want to Play, Not Started, Playing, Completed, and Dropped. | R9, R21, R24, R25, ADR-08, ADR-09 | T14, T15 | Not started |
| T27 | Update the shared state and visible views immediately after a status change. | R9, ADR-11 | T8, T26 | Not started |
| T28 | Display the required explanation when Dropped is selected or shown. | R24, ADR-08 | T26, T27 | Not started |
| T29 | Add a control that marks or unmarks a game as a favorite. | R10, R11 | T14, T15 | Not started |
| T30 | Synchronize favorite indicators across card, list, detail, and Favorites-filter views. | R8, R10, R11, ADR-11 | T8, T22, T29 | Not started |
| T31 | Add owned/not-owned and multiple-platform editing controls. | R12, R21, R22, R25, ADR-06 | T14, T15 | Not started |
| T32 | Display every associated owned platform in card, list, and detail views. | R12, R22, ADR-06, ADR-11 | T8, T31 | Not started |
| T33 | Add Physical and Digital ownership-type choices for owned games. | R23, ADR-07 | T31 | Not started |
| T34 | Display the selected ownership type in the detail view. | R4, R23, ADR-07 | T8, T33 | Not started |
| T35 | Add a numeric completion-percentage field for a Playing game. | R13, ADR-10 | T26 | Not started |
| T36 | Accept only whole-number completion values from 0 through 100. | R13, R14, ADR-10 | T35 | Not started |
| T37 | Reject invalid completion values and display a clear validation message. | R14, ADR-10 | T36 | Not started |
| T38 | Implement unreleased-game behavior so a game can remain not owned while marked Want to Play and display its future release date. | R21, R25, ADR-09 | T6, T15, T26, T31 | Not started |
| T39 | Define the localStorage data structure and validation rules for status, favorites, ownership/platform, ownership type, completion percentage, and view preference. | R18, R19, ADR-03 | T18, T27, T30, T31, T32, T33, T34, T35, T36 | Not started |
| T40 | Implement safe loading of valid saved values into shared application state. | R18, R19, ADR-03, ADR-11 | T39 | Not started |
| T41 | Implement saving and unavailable-storage fallback so the app continues in memory when localStorage cannot be used. | R18, R19, ADR-03 | T39, T40 | Not started |
| T42 | Test refresh persistence, invalid stored data, and blocked-storage behavior. | R18, R19 | T39, T40, T41 | Not started |
| T43 | Audit all interactive controls for clear labels, native semantics, keyboard operation, visible focus, logical focus order, and non-color state indicators, then correct any issues. | R2-R17, R23-R25, ADR-13 | T18, T21, T22, T26, T29, T31, T33, T35 | Not started |
| T44 | Check text contrast, image alternative text, keyboard operation, and readable validation messages. | R1-R17, R21-R25, ADR-13 | T12, T37, T43 | Not started |
| T45 | Refine the CSS so the control area, card view, list view, detail view, and editing controls work at smaller viewport widths. | R1-R8, R16, R17, ADR-01 | T24, T30, T34, T37 | Not started |
| T46 | Test the interface at desktop and smaller viewport widths and correct overflow or unreadable controls. | R1-R17, R21-R25 | T45 | Not started |
| T47 | Test valid and invalid completion inputs, including 60, -1, and 101. | R13, R14 | T35, T36, T37 | Not started |
| T48 | Test adding two platforms to one game and changing its ownership type from Physical to Digital. | R12, R22, R23 | T31, T32, T33, T34 | Not started |
| T49 | Test all five status values, the Dropped explanation, favorite changes, and the unreleased Want to Play workflow. | R9-R11, R21, R24, R25 | T26, T27, T28, T29, T30, T38 | Not started |
| T50 | Execute and record the formal acceptance test for every requirement from R1 through R25 in the local browser build. | R1-R25 | T13, T16, T19, T25, T28, T30, T32, T33, T34, T37, T38, T42, T44, T46, T47, T48, T49 | Not started |
| T51 | Conduct the prototype success test for finding a game, identifying its platform, opening details, changing status, marking it favorite, and returning to the library in under two minutes without assistance. | R2, R4, R5, R9, R10, R17 | T50 | Not started |
| T52 | Verify the completed front end contains no features or behaviors outside the approved specification. | R1-R25, ADR-01-ADR-13 | T50 | Not started |
| T53 | Verify the deployed GitHub Pages version loads its HTML, CSS, JavaScript, local data, images, and navigation correctly. | R1-R25, ADR-01, ADR-02 | T52 | Not started |
| T54 | Repeat critical view, search, filter, detail, editing, persistence, and unavailable-storage tests on the deployed front end. | R1-R25 | T53 | Not started |
| T55 | Review the completed implementation, acceptance-test results, and deployed application against `plan.md` and the approved specification before project sign-off. | R1-R25, ADR-01-ADR-13 | T54 | Not started |

**Status values:** Not started · In progress · Done · Blocked

## Definition of Done

- Matches its linked requirement's acceptance criteria in the specification.
- Reviewed by a human before marked done.
- No task marked done without a test passing.

## Blocked / Questions

| Task | Blocker | Raised | Resolved |
|------|---------|--------|----------|
| | | | |

## Quick Self-Check Before You Start Building

- [ ] Every task traces to a requirement or ADR
- [ ] Every task is small enough to finish in under a day
- [ ] Order matches plan.md's sequencing (riskiest/most depended-on first)
- [ ] No task is vague enough that "done" is a judgment call
- [ ] Blocked items are logged, not silently skipped

If any box is unchecked, refine the task list before writing code.
