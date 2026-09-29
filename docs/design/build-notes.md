# Build Notes — T1 Template Review

## Task

T1 reviews the existing course web app template and identifies the HTML, CSS, JavaScript, asset, and navigation files to reuse.

- Traces to: ADR-01
- Dependencies: None
- Review date: 2026-09-28

## Reuse Map

| Area | File or location | Reuse notes |
|------|------------------|-------------|
| HTML entry point | `index.html` | Reuse the document shell, viewport metadata, `#app` mount point, and `router-view` layout. Update the title and page-level classes for VGC Library when implementation begins. |
| Application logic | `app.js` | Reuse Vue app creation, Vue Router setup, hash history, route registration, shared store injection, and loading/error flow. Adapt the item mapping and state for game records in a later task. |
| Global styles | `style.css` | Reuse as the project stylesheet entry point. Existing styles cover collection-image height, description truncation, and detail-image sizing. Add VGC Library styles only in later tasks that require them. |
| Navigation | `components/navbar-component.js` | Reuse the shared navbar component and router-link pattern. Adapt the brand and labels to VGC Library while keeping the existing simple route structure. |
| Landing page | `components/landing-page-component.js` | Reuse the landing-page component structure and route link pattern. Replace template wording with VGC Library content in a later task. |
| Collection view | `components/collection-page-component.js` | Reuse the loading, error, empty-state, responsive grid, card, image fallback, and detail-link patterns. Adapt displayed fields for games in later tasks. |
| Detail view | `components/item-detail-page-component.js` | Reuse route-parameter lookup, loading/error/not-found states, image fallback, and back-to-collection control. Adapt displayed fields and editing controls in later tasks. |
| About page | `components/about-page-component.js` | Reuse the existing `/about` route and component location. Update the content only if required by the approved specification. |
| Local data entry point | `data/items-template.csv` | Keep the CSV-driven local data workflow in a dedicated data folder. The current rows describe local businesses, not games. |
| External UI assets | `index.html` CDN links | Bootstrap 5.3.3 and Bootstrap Icons 1.10.5 are currently loaded from CDNs and used by the template components. |
| External JavaScript libraries | `index.html` CDN scripts | Vue 3, Vue Router 4, and Papa Parse are loaded from CDNs. |
| Static assets | `assets/` | Dedicated folder for local cover images and other static assets. It is currently empty; collection images still use remote `picsum.photos` URLs from the CSV. |

## Existing Routes

The current hash-routed navigation in `app.js` supports:

- `#/` — landing page
- `#/items` — collection page
- `#/items/:id` — item detail page
- `#/about` — about page

These routes match the project-level route constraint and can be retained for VGC Library.

## Current Template Boundaries

- The current shared store loads CSV rows with fields for `id`, `name`, `description`, `category`, `image_url`, and `location`.
- The local CSV is organized at `data/items-template.csv`, and `app.js` loads it from that path.
- The current dataset contains 10 business records, so it does not yet meet the approved 12-game dataset requirement.
- The current collection is card-only and has no game search, filters, editing controls, favorites, localStorage persistence, or list view.
- These are observations for later tasks, not changes included in T1.

## Design System Alignment

The template review follows the reference guide at `docs/design/reference/design-system-guide.md` and the project rules in `docs/design/design-system.md`:

- Reuse the documented VGC Library colors, Arial typography, 8px spacing scale, and 8px component corner radius when later implementation tasks change the interface.
- Keep the existing simple navigation and route structure aligned with the design system's navigation rule.
- Preserve labeled controls, visible focus states, useful image alternative text, readable contrast, and text-based status indicators.
- Keep future design changes within the documented component patterns instead of introducing new visual styles or libraries.

The reference guide also recommends linking the design system from the specification and plan. That documentation update is outside T1 and is recorded here as a later project-documentation follow-up rather than changed in this task.

## T1 Completion Check

The template files and reusable responsibilities have been identified. No application code was changed as part of T1.

## T2 Template Run Findings

The unchanged template was opened from `index.html` using the local file URL because Python and Node were not available to start a local HTTP server in the current environment.

### Layout and Navigation

- The landing page renders with the `Web App Starter` navbar, Home, Items, and About links, plus the example collection link.
- The collection route renders a responsive Bootstrap card grid with 10 records from the current CSV dataset.
- The detail route opens a selected record and provides a back-to-collection link.
- The About route renders successfully.
- The current layout uses Bootstrap's light theme and does not yet match the approved VGC Library dark design system. This is an observation for later implementation tasks, not a T2 change.

### Browser Console

- Reloading the unchanged application produced no console messages or page errors.

### Environment Limitation

- `python -m http.server 8000` could not run because Python is unavailable through the current Windows environment.
- A Node-based server was also unavailable because Node and `npx` were not installed.
- File-based browser verification succeeded, but HTTP-server verification should be repeated when a local runtime is available.

## T2 Completion Check

The unchanged template was run and its layout, navigation, route behavior, console state, and environment limitation were recorded. No application code was changed as part of T2.

## T3 File Organization

- `index.html` remains the HTML entry point.
- `style.css` remains the shared stylesheet.
- `app.js` remains the application and routing entry point.
- `components/` contains the reusable Vue page and navigation components.
- `data/items-template.csv` contains the local data source.
- `assets/` is reserved for local image assets.

The data path was updated without changing the CSV format or the existing application behavior.

## T4 Game-Record Structure

The JavaScript structure is defined in `data/game-record.js` through `createGameRecord`. Each record includes:

- `id`, `title`, `coverImage`, `description`, and `genre`
- `releaseYear` and `releaseDate` for released or future-release information
- `owned`, `ownershipType`, and `platforms` for ownership details
- `status` and `favorite` for collection state
- `completionPercentage` for applicable Playing games

The file also defines the approved status values and ownership types. It does not validate records or create the 12 sample games; those responsibilities belong to later tasks.

## T5 Sample Dataset

The local CSV now contains exactly 12 real game records with unique IDs. The existing template-compatible columns remain alongside the game fields so the current collection renderer continues to work while later tasks connect the full game structure.

The browser collection shows 12 records, and a parsed data check confirmed 12 rows with 12 unique IDs. Special multi-platform and unreleased-game cases are intentionally handled in T6.

## T6 Required Dataset Cases

- `Minecraft` is owned on two platforms: `PC` and `Switch`.
- `Grand Theft Auto VI` is marked not owned and `Want to Play`.
- `Grand Theft Auto VI` has the supplied future release date `2026-11-19`.
- Cover URLs remain neutral `picsum.photos` placeholders rather than copyrighted game artwork or logos.

The browser and parsed CSV checks confirmed both required cases.

## T7 Dataset Validation

`validateGameRecords` in `data/game-record.js` checks required fields, unique IDs, supported statuses, ownership types, owned-platform presence, and completion values. The 12 CSV rows were normalized into the game-record structure and validated successfully with zero errors.

## T8 Shared Application State

`data/game-state.js` defines the shared state shape with the game list, loading state, error state, and a default `card` view preference. Its `updateGame` method applies editable game fields through one path and replaces the changed record so Vue can update all consuming views. Platform arrays are copied during updates, and unknown game IDs return `false` without changing state.

`app.js` now creates this state with Vue reactivity, normalizes CSV rows into game records, validates them before display, and retains temporary template aliases for the existing card and detail components.

## T9 Page Structure

The collection page now has named semantic regions for library controls, feedback messages, and the collection area. The detail page has named regions for detail navigation, feedback messages, and selected-game content. The new regions provide stable structure for later controls and renderers without adding search, filters, or editing behavior prematurely.

## T10 Default Card Renderer

The collection card loop now reads normalized `game` records from shared state and renders while `viewPreference` is `card`. It uses the game title, cover image, genre, description, ID-based detail link, and stable card keys. The browser check confirmed 12 cards, 12 detail links, all real game titles, and no remaining template-only location field.

## T11 Card Collection Information

Each card now displays the cover, title, ownership state, every associated platform, and the current status as labeled text. The browser check confirmed Minecraft displays `Owned`, `PC, Switch`, and `Playing`; Grand Theft Auto VI displays `Not owned`, `None`, and `Want to Play`.

## T12 Cover Alternative Text

Collection cover images now use explicit title-specific alternative text in the form `Cover image for [game title]`. The browser check found 12 rendered images and zero missing or empty alt values.

## T13 Default View Acceptance Test

The default collection view was checked against R1, R2, and R20. It displays exactly 12 games, and every card has a title, cover image, non-empty alt text, ownership label, platform label, status label, and detail link. The complete card check passed for all 12 records.

## T14 Game Selection

The existing ID-based detail links were verified as the selection behavior. Clicking Minecraft's card link changed the hash route to `#/items/minecraft`, opened exactly one detail region titled Minecraft, and showed the matching `Item ID: minecraft` value.

## T15 Detail Information

The detail view now reads normalized game fields and displays title, cover, genre, description, ownership state, all platforms, ownership type, status, favorite state, release date, and completion percentage for Playing games. Minecraft verified the owned multi-platform and 60% completion case. Grand Theft Auto VI verified the unowned Want to Play and `2026-11-19` future-release case without showing completion.

## T16 Back Navigation

The detail view's Back to collection control was clicked from the Grand Theft Auto VI route. It returned to `#/items`, restored the collection page, and preserved all 12 cards.

## T17 List Renderer

The collection page now includes a compact horizontal `list-area` renderer using the same shared game records as card view. Each list item includes a fixed 80px cover, title, genre, ownership, platforms, status, and detail link. The default card regression check still rendered 12 cards with no console or page errors; T18 will expose and exercise the list branch through the view switch.

## T18 View Switch

The library controls now provide an accessible Card view/List view segmented control backed by shared `viewPreference` state. Card view starts selected, List view shows all 12 list items, and switching back restores all 12 cards. The active choice is exposed through `aria-pressed` text state.

## T19 View Data Preservation Test

The 12 card-view title/ID pairs were compared with the 12 list-view title/ID pairs after switching modes. Counts matched and the complete ordered collections were identical.

## T20 Shared Search and Filter State

`data/game-state.js` now stores `searchTerm`, `statusFilter`, `platformFilter`, and `favoritesOnly`. Its single `filterGames` function applies all active criteria together using case-insensitive title matching, exact status/platform matching, and favorite-state matching. Direct state tests passed for each criterion and a combined search/status/platform/favorites case.

## T21 Title Search

The collection controls now include a labeled `Search by game title` input bound to shared `searchTerm`. Both card and list renderers use `filterGames`, and the shown count uses the filtered result. Browser verification returned one Minecraft card for the search `Minecraft` and restored all 12 cards after clearing the input.

## T22 Status, Platform, and Favorites Filters

The controls now include a five-option status select, a platform select derived from the records, and a labeled Favorites checkbox. Browser verification returned 4 games for Completed, the expected Minecraft/Zelda/Mario Kart/Animal Crossing set for Switch, and 5 games for Favorites.

## T56 Release Platforms

The approved `releasePlatforms` field is now separate from owned `platforms`. Grand Theft Auto VI has `releasePlatforms: ["PS5"]`, remains not owned with no owned platforms, and displays `Release platforms: PS5` in its detail view. Browser validation passed with no data error.

## T23 Active Filter Indicators

The collection now displays readable active-filter text for search, status, platform, and Favorites criteria. Browser verification showed all four indicators together for the combined Minecraft/Playing/Switch/Favorites case and removed the summary after all controls were reset.

## T24 No Results State

The collection shows `No games found for the current search or filters.` when active criteria return no records, with a `Clear search and filters` reset button. Browser verification produced zero cards for `No Such Game` and restored all 12 cards after reset.

## T25 Search and Filter Test Matrix

The card and list views were each tested for title search, status, platform, Favorites, combined Minecraft/Playing/Switch/Favorites criteria, active indicators, no-results feedback, and reset behavior. Both views returned search 1, Completed 4, Switch 4, Favorites 5, combined 1, no-results 0, and restored 12 after reset.

## T26 Status Editor

The detail view now includes a labeled status editor with the five approved values: Want to Play, Not Started, Playing, Completed, and No Longer Interested. Browser verification confirmed the editor starts at the selected game's current status and can select No Longer Interested locally; shared-state mutation remains T27 scope.

## T27 Immediate Status Updates

The status editor now calls the shared `updateGame` method. Browser verification changed Minecraft from Playing to Completed, showed the new status immediately in the detail view, and showed Completed on the Minecraft card after returning to the collection.

## T28 Dropped Explanation — Superseded

This section records the original T28 behavior before the approved status revision. It is no longer active.

## Status Revision — No Longer Interested

On 2026-09-28, the approved status revision replaced Dropped with No Longer Interested and removed the Dropped explanation. The status list, sample data, specification, plan, task wording, and detail view were updated together. Browser validation confirmed the new status appears, Dropped is absent, and no old explanation is shown.

## T29 Favorite Control

The detail view now includes a toggleable star beside the selected game's title. Browser verification confirmed the star initializes from favorite state and provides accessible add/remove labels.

## T30 Favorite Synchronization

The Favorite star updates shared state, and cards and list items display Favorite Yes/No text. Browser verification changed Minecraft to not favorite in detail, confirmed No in card and list views, and confirmed the Favorites filter removed it, reducing the result count from 5 to 4.

## T31 Ownership and Platform Editors

The detail view now includes an Owned checkbox and owned-platform checkboxes derived from the available records. Unchecking ownership clears owned platforms; re-enabling ownership allows multiple platforms. Browser verification changed Zelda to not owned, confirmed `Platforms: None`, then selected PS5 and Switch and confirmed both appeared in the detail view.

## T33 Ownership Type Editor

Owned games now have a Physical/Digital ownership-type select. Browser verification changed Minecraft from Digital to Physical and confirmed the detail metadata updated; the control is disabled for unowned Grand Theft Auto VI.

## T34 Ownership Type Display

The selected ownership type is shown in the detail metadata. Browser verification selected Physical for Minecraft and confirmed `Ownership type: Physical` while the game remained owned.

## Ownership Model Revision — Per Platform

On 2026-09-28, the approved ownership model changed from one type per game to `platformOwnership`, a Physical/Digital value for each owned platform. T57 will implement and test examples such as PS5 Physical and Switch Digital. No application code has changed for this revision yet.

## T57 Per-Platform Ownership Types

The game schema, CSV data, storage snapshot, and detail editor now use `platformOwnership`. Minecraft is seeded as PS5 Physical and Switch Digital. Browser verification displayed both values, changed PS5 to Digital independently, and kept Switch Digital unchanged. The former single ownership-type editor is removed.

On 2026-09-28, the per-platform ownership-type dropdowns were replaced with Physical/Digital toggle buttons for each owned system. The selected button uses `aria-pressed` state; the data model and behavior are unchanged.

## Ownership Model Revision — Both Types Per Platform

On 2026-09-28, the approved model was extended so each `platformOwnership` value may contain Physical, Digital, or both. T58 will implement independent toggle buttons per owned platform; code implementation has not started.

## T58 Both Ownership Types Per Platform

`platformOwnership` values are now arrays. Minecraft starts with PS5 Physical and Digital plus Switch Digital. Browser verification confirmed both PS5 buttons can be pressed together; toggling PS5 Physical off left PS5 Digital and Switch Digital selected. Storage validation also accepts the array form.

## T48 Per-Platform Ownership Test

The formal ownership test confirmed Minecraft has two owned platforms, PS5 supports both Physical and Digital, Switch remains Digital, and toggling PS5 Physical off and on preserves the other type and restores the canonical order.

## T50 Formal Acceptance Test

The local-browser acceptance pass passed all checks for R1-R26: card/list/detail views, search and filters, selection/back navigation, status and favorite changes, completion validation, ownership/platform editing, per-platform ownership arrays, storage behavior, the No Longer Interested revision, and Grand Theft Auto VI release-platform behavior.

## T51 Prototype Success Workflow

An automated browser workflow found Stardew Valley by title, identified PC as its platform, opened details, changed status to Completed, marked it favorite, and returned to the library in 1.5 seconds. This is an automated workflow proxy; human tester success-rate validation remains separate.

## T52 Scope Audit

The functional audit found no implemented behavior outside the approved R1-R26 scope. Leftover template wording on the landing and About pages was replaced with VGC Library content. Reloaded route checks confirmed the revised pages render correctly.

## T53 Deployment Verification — Blocked

The workspace contains no deployed GitHub Pages URL, workflow file, or CNAME configuration. T53 cannot be verified until the repository is deployed and its public URL is available.

## T53 GitHub Pages Verification

The deployed site at `https://kennyneverdies09.github.io/C450-Classwork/#/` passed verification. Home, collection, detail, and back navigation worked; the collection loaded 12 CSV-driven games and 12 original placeholder cover tiles; and no browser console or page errors occurred.

## T54 Deployed Critical Workflow Test

The deployed site passed critical tests for search, platform filtering, card/list views, status and favorite updates, per-platform ownership, completion validation, persistence, and the Grand Theft Auto VI unowned Want to Play/future-date/PS5 workflow.

## T49 Status, Favorite, and Unreleased Workflow Test

All five current statuses passed, including No Longer Interested without the obsolete Dropped explanation. Favorite unmarking removed Minecraft from the Favorites filter and remarking restored it. Grand Theft Auto VI remained not owned and Want to Play while showing its future date and PS5 release platform.

## T42 Storage Acceptance Tests

Favorite state persisted across a page reload. Malformed JSON was ignored without an application error, and all 12 games still loaded. A throwing storage adapter returned the unavailable-storage fallback while core collection browsing remained available.

## T35 Completion Field

Playing games now show a labeled numeric Completion percentage field. Browser verification changed Minecraft from 60% to 75%, confirmed `Completion: 75%`, and confirmed the field hides when status changes to Completed.

## T36 Completion Bounds

Completion bounds are centralized at 0 and 100, and the input uses numeric mode with `min="0"`, `max="100"`, and `step="1"`. Browser validity accepted 0, 60, and 100.

## T47 Formal Completion Input Test

The formal test saved and displayed 60%. Inputs -1 and 101 were both rejected, restored to 60%, and produced the readable `Enter a whole number from 0 to 100.` message.

## T37 Completion Validation

Invalid completion values are rejected at the shared update handler, the saved value is restored, and the nearby alert says `Enter a whole number from 0 to 100.` Browser verification rejected both -1 and 101 without changing Minecraft's saved 60% value.

## T43 Interactive Control Audit

The audit confirmed labeled native inputs/selects, named buttons, `aria-pressed` state for view/favorite/ownership buttons, and keyboard Tab navigation through detail controls. Repeated card/list detail links were given unique game-specific labels, and an explicit visible focus rule was added for links, buttons, inputs, and selects.

## T45 Responsive CSS Refinement

Narrow-screen CSS now stacks view controls, wraps list items, expands list detail links, tightens detail padding, and wraps per-platform ownership buttons. Browser checks at 320px, 375px, and 768px found no horizontal overflow in collection, list, or detail views.

## T46 Responsive Viewport Test

Desktop and narrow viewport checks at 320px, 375px, 768px, and 1440px found no horizontal overflow. All visible interactive controls stayed within the viewport, and headings, labels, and buttons remained within readable bounds across card, list, and detail views.

## T44 Accessibility and Contrast Check

Rendered body text measured a 14.6:1 contrast ratio against the page background, form controls also passed contrast checks, all visible images had non-empty alt text, and the invalid completion message was visible with `role="alert"`.

## T38 Unreleased Want to Play Workflow

Grand Theft Auto VI was verified as Want to Play and not owned, with no owned platforms. Its future release date `2026-11-19` and separate release platform `PS5` remain visible, and its ownership controls remain unchecked/disabled.

## T39 Local Storage Schema

`data/storage.js` defines version 1 storage under `vgc-library-state`. Snapshots save view preference and editable game fields only: status, favorite, owned, per-platform ownership types, owned platforms, and completion percentage. Validation rejects unsupported statuses, invalid booleans, inconsistent ownership/platform data, invalid ownership types, unknown game IDs, invalid view preferences, and completion values outside 0–100.

## T40 Safe Storage Loading

Valid JSON snapshots are parsed, validated, and applied to shared state after the local dataset loads. Invalid JSON or invalid snapshots are ignored without blocking startup. Browser verification restored list view, Minecraft's No Longer Interested status, Favorite No, owned platforms, and per-platform ownership types from a seeded valid snapshot.

## T41 Storage Saving and Fallback

Shared game and view changes now save through `saveStorageSnapshot`. Browser verification preserved list view and a favorite change across reload. A storage adapter that throws returned `saved: false` with `Browser storage is unavailable.` without interrupting in-memory operation.

## T32 Owned Platform Display

Minecraft's owned platforms were checked across detail, card, and list views. All three displayed `Platforms: PC, Switch` from the same shared `platforms` array.

## Favorite Control UI Revision

On 2026-09-28, the detail-view Favorite checkbox was replaced with a toggleable star positioned to the left of the game title. The approved favorite behavior and accessibility labels were preserved; no specification requirement changed.

On 2026-09-28, the Favorite star size was increased to 1.75rem for easier recognition and interaction. Its behavior and position remain unchanged.

## T59 Design System Implementation

Applied the approved VGC Library design system: dark `#121212` background, `#1E1E1E` surfaces, `#6C63FF` primary actions, `#00B8D9` secondary accents, `#F5F5F5` text, Arial typography, 8px component radius, dark forms/cards, branded navigation, and responsive control styling. Browser validation confirmed the documented colors, font, 12-game collection, and no overflow at 320px and 1440px.

## T60 Funny Placeholder Tiles

The collection now uses original local funny placeholder tiles from `data/game-art.js` instead of remote `picsum.photos` images. All 12 cards and the detail view expose accessible original-placeholder labels and captions; no game artwork, logos, or character art was added.

## T55 Final Sign-Off Review

The completed implementation, local acceptance pass, deployed GitHub Pages checks, plan, and approved specification were reviewed together. R1-R26, ADR-00 through ADR-11, and completed tasks T1-T60 align with the deployed VGC Library prototype. The only remaining external validation is a human usability study; automated workflow coverage is recorded in T51.


## Revision History

| Date | Revision | Impact |
|------|----------|--------|
| 2026-09-28 | Added dated revision tracking across the design documents. | At the time of this entry, implementation progress through T22 was recorded and `releasePlatforms` remained a proposal. |
| 2026-09-28 | Approved release-platform revision and added T56. | `releasePlatforms` is now approved as separate from owned `platforms`; Grand Theft Auto VI will list PS5 only. Implementation is not started yet. |
