# Module 1 Portfolio — Video Game Collection Library (VGC Library)

## Part 1: Traceability Audit

The three examples below trace benefits from the Business Case to a requirement and its Section 5 acceptance test in the Specification, an architecture decision in the Plan, and an implementation task in the Tasks document.

| Business case benefit | Requirement | Acceptance test | ADR | Task |
| --- | --- | --- | --- | --- |
| Better organization | R18 | Change status/favorite, refresh the page, and reopen the game. **The changes remain when local storage is available.** | ADR-02 | T39 |
| Reduced duplicate game purchases | R23 | Mark a game as both Physical and Digital on PS5 and Digital on Switch. **Each platform displays and saves its selected ownership types independently.** | ADR-11 | T33 |
| Improved user experience | R24 | Set a game to No Longer Interested and view its status information. **No Longer Interested is visible without requiring an additional explanation.** | ADR-07 | T28 |

R18 supports better organization by keeping the user's updates after a normal refresh. R23 helps users keep track of whether their games are physical or digital and on which platforms, making duplicate purchases less likely. R24 improves the user experience by giving a clearer status option without needing an extra explanation.

## Part 2: AI Collaboration Evidence

### Prompt A: One That Worked Well

**Original prompt:**

> "we will proceed with creating a task.md file based on draft 2 and the specifications that was uploaded eariler."

**Follow-up prompt:**

> "focus on the front-end development tasks"

**Document or context provided:** I provided my Specification and Plan documents for the Video Game Collection Library project. These documents explained the requirements and how the application was supposed to be developed.

**What AI produced and what I changed:** AI generated a task list based on the documents I provided, focusing on front-end development. The tasks included descriptions, requirement references, dependencies, and development steps. I made additional changes to improve the formatting, dependencies, and alignment with the assignment guide.

**Reflection:** I think this prompt worked well because AI was able to take the information from my existing documents and organize it into individual development tasks. Having the Specification and Plan already completed gave AI a better understanding of what needed to be done. Although some revisions were still necessary, it gave me a good starting point rather than having to create every task manually. I would continue using this approach because it made the planning process easier.

### Prompt B: One That Did Not Work Well

**Original prompt:**

> "Replace every remaining range now"

**Document or context provided:** I provided the `tasks.md` document, which contained the development tasks and their dependencies. I wanted AI to replace dependency ranges with specific task IDs to make the document easier to follow.

**What AI produced and what I changed:** AI made the requested changes to the dependency ranges but introduced other issues in the process. This required additional prompts to review the dependencies, identify problems, and make corrections. I had to repeatedly verify that the changes were applied correctly and that there were no remaining ranges or duplicate dependencies.

**Reflection:** This prompt did not work as well because AI made the changes I requested but created additional issues that needed to be corrected. It showed me that even when AI appears to complete a task, the results still need to be reviewed rather than assuming everything is correct. Looking back, I probably should have been more specific about what needed to be changed and instructed AI not to modify anything outside of those changes. In the future, I would make smaller changes and verify each one before moving forward.

## Part 3: Document Reflection

### Which document paid off the most?

I would say the Specification paid off the most because it provided a clear outline of what I wanted the application to do before actually developing it. It helped me organize the different features, such as tracking game ownership across multiple platforms, changing game statuses, marking favorites, and saving information. Having these requirements already written out made it easier to communicate what I wanted GitHub Copilot to build rather than having it make those decisions for me.

The Specification was also useful when I needed to make changes during development. For example, I made adjustments to how physical and digital ownership would be tracked and how unreleased games would be handled. Having the Specification allowed me to make those changes while keeping the overall purpose of the application the same.

### Which document needed the most improvement?

I would say the Plan needed the most improvement because even though it outlined how the application would be developed, some of the technical decisions needed to be adjusted as I worked through the project. It was difficult to account for everything before actually starting development, especially when determining how different features would work together.

For example, the application became more involved when adding support for multiple platforms, different ownership types, and saving changes through local storage. If I were to do this again, I would spend more time reviewing the Plan against the Specification before starting development. I would also make sure the technical decisions were clearly connected to the requirements and tasks so that any changes could be tracked more easily.

## Appendix: Aggregated Documents

### Business Case

# Business Case — Video Game Collection Library (VGC Library)

## 1. Problem / Opportunity

Many video game players/gamers own games across several consoles, digital stores, and subscription services, which makes it difficult to remember what games they own, want to play, are currently playing, or have completed. VGC Library provides an opportunity to organize this information in one simple location and make managing a growing game collection easier.

## 2. Proposed Solution

VGC Library will be a web application that allows gamers' entire collection to be viewed and organized in one place. Users will be able to select a game to view additional details, mark games as "Want to Play," "Playing," or "Completed," and bookmark favorite games. The application will provide a simple way for users to organize their gaming backlog and quickly decide what game they want to play next.

## 3. Options Considered

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| Option A | Continue using console libraries, notes, spreadsheets, or memory to keep track of games. | No development cost and users can continue using tools they already have. | Game information may be spread across several locations and can become difficult to organize as a collection grows. |
| Option B (recommended) | Develop VGC Library as one web application for organizing and tracking video games. | Centralized information, easier organization, simple status tracking, bookmarking, and improved access to game details. | Requires development and maintenance, and game information will need to be kept current. |

## 4. Feasibility

| Type | Assessment |
|------|------------|
| Operational — will people actually use/support this? | VGC Library is operationally feasible because players who have games across multiple platforms may benefit from having one location to manage their gaming backlog. The interface will also use familiar features such as browsing, selecting, filtering, and bookmarking. |
| Technical — can we build it with what we have/can get? | VGC Library is technically feasible because the prototype can be developed from the provided web application template using existing web development tools. A small simulated dataset can be used without requiring authentication or an external database. |
| Economic — does the payoff justify the cost? | VGC Library is economically feasible for a prototype because development costs are limited and existing tools can be used. If expanded into a public application, potential benefits could include user subscriptions, advertising, partnerships, and increased user engagement. |
| Schedule — can it be done in a useful timeframe? | VGC Library is schedule feasible because the first version will have a limited scope. Development can focus on displaying games, viewing individual game details, tracking game status, and bookmarking games within the course timeframe. |

## 5. Costs & Benefits

**Costs** (one-time + ongoing):

| Item | One-time | Ongoing/year |
|------|----------|--------------|
| Application development and testing | $1,200 | $0 |
| Creation of initial game data | $300 | $0 |
| Initial web setup | $100 | $0 |
| Web hosting | $0 | $150 |
| Game information updates | $0 | $200 |
| Application maintenance | $0 | $400 |
| **Total** | **$1,600** | **$750** |

**Benefits** (tangible + intangible):

| Benefit | Tangible ($/time saved)? | Notes |
|---------|-----------------------------|-------|
| Potential subscription or advertising revenue | $1,500/year | A future public version could generate limited revenue through optional premium services or advertising. |
| Reduced time searching through different game libraries | $1,000/year estimated value | Users can view their gaming information from one location instead of searching through several platforms. |
| Reduced duplicate game purchases | $500/year estimated value | Better tracking can help users remember which games they already own. |
| Better organization | Intangible | Users can separate games into Want to Play, Playing, and Completed categories. |
| Improved user experience | Intangible | Users can more easily decide which game they want to play next. |
| Increased user satisfaction | Intangible | A simple organized interface can make managing a large game collection easier. |

**Payback period:** Approximately 8.5 months.

Estimated annual tangible benefits:

$1,500 + $1,000 + $500 = **$3,000 per year**

Estimated annual net benefit:

$3,000 - $750 = **$2,250 per year**

Payback calculation:

$1,600 / $2,250 = **0.71 years**, or approximately **8.5 months**.

**ROI:** Approximately 27.7% for the first year.

ROI calculation:

($3,000 - $2,350) / $2,350 = **0.277**, or approximately **27.7%**

*(See Toolkit Part C — Financial Analysis Tools document for payback, ROI, and present value formulas.)*

## 6. Priority & Urgency

Digital game collections can continue to grow as users purchase games from different consoles, online stores, and subscription services. Developing VGC Library now would provide users with a centralized way to organize their games before their collections become more difficult to manage.

If the application is not developed, users may continue relying on separate console libraries, spreadsheets, notes, or memory to manage their games. Developing the prototype now also provides an opportunity to determine whether the concept is useful before investing in more advanced features.

## 7. Recommendation

Proceed with Option B and approve development of the VGC Library prototype.

## 8. Approval

| Role | Name | Date | Decision |
|------|------|------|----------|
| Sponsor | | | Go / No-go |

---

### Primary sources

- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Chapter 2, "Analyzing the Business Case"
- *Systems Analysis and Design*, 10th ed. (Cengage, 2017) — Toolkit Part C, "Financial Analysis Tools"


### Specification

# Video Game Collection Library (VGC Library) — Specification

## 0. Constitution

Non-negotiable principles this product must never violate, regardless of feature.

| # | Principle | Why it exists |
|---|-----------|---------------|
| 1 | The application must remain simple and easy to navigate. | The main purpose is to make managing a game collection easier, not more complicated. |
| 2 | Ownership, platform, status, and favorite information must be clearly visible and easy to change. | User research showed these are the most important pieces of collection information. |
| 3 | The first version will not require user accounts, authentication, or an external database. | This keeps the prototype within the course scope and timeline. |
| 4 | Core collection changes must remain available after a normal page refresh when browser storage is available. | Users should not lose status, favorite, ownership, or progress changes during normal prototype use. |

---

## 1. Problem & Intent

**Who is this for?**

VGC Library is designed for gamers who own or access video games across multiple consoles, PC stores, and subscription services.

**What problem do they have today?**

Users often rely on memory or must open several platform libraries to remember which games they own and on which platform. This can make a growing collection difficult to organize and can sometimes lead to duplicate purchases.

**Why now / why us?**

Game collections are increasingly spread across consoles, PC storefronts, and subscription services. VGC Library gives users one place to see ownership, platform, play status, favorites, and progress without requiring the first prototype to connect to outside services.

**What does success look like?**

At least 80% of prototype testers should be able to find a game, identify which platform they own it on, open its details, change its status, mark it as a favorite, and return to the library without assistance in under two minutes.

---

## 2. Scope

**In scope** — this version must:

- Display a collection of video games.
- Show game cover cards as the default collection view.
- Provide an optional list view.
- Show title, owned platform, ownership state, ownership type, and current status in the collection view.
- Allow a user to select a game and view additional details.
- Allow a user to search by game title.
- Allow filtering by status, platform, and favorites.
- Support the statuses "Want to Play," "Not Started," "Playing," "Completed," and "No Longer Interested."
- Allow "Want to Play" to be used for games the user does not yet own, including unreleased games.
- Display announced release platforms for unreleased games without treating those platforms as owned platforms.
- Allow a user to mark or unmark a game as a favorite.
- Allow one game to be associated with more than one owned platform.
- Allow owned games to be marked as Physical or Digital.
- Allow a completion percentage from 0–100 to be recorded for a game that is being played.
- Save status, favorite, ownership/platform, completion percentage, and view preference in browser local storage when available.
- Use a small simulated/local dataset of 12 games for the prototype.
- Include at least one unreleased sample game that can be marked as Want to Play.

**Out of scope** — this version will not:

- Require user accounts or authentication.
- Connect directly to PlayStation, Xbox, Nintendo, Steam, Game Pass, or other gaming accounts.
- Automatically import game libraries.
- Track live store prices or sales.
- Send sale notifications.
- Track achievements or trophies.
- Launch installed PC games.
- Track mods or whether a game is modded.
- Include public reviews, social networking, or friend activity.
- Allow custom uploaded game artwork.
- Filter by recently purchased, genre, or release year in the first version.
- Use an external production database.
- Allow purchasing games from within the application.

### Status Definitions

| Status | Meaning |
|--------|---------|
| Want to Play | The user is interested in the game. Ownership is not required. |
| Not Started | The user owns or has access to the game but has not started playing it. |
| Playing | The user is currently playing the game. |
| Completed | The user considers the game completed. |
| No Longer Interested | The user no longer plans to continue with the game. No additional explanation is required. |

### Game Data

Each sample game record must support the following information:

- Game ID
- Title
- Cover image
- Description
- Genre
- Release year
- Release date or future release date when applicable
- Owned/not owned state
- Ownership type per owned platform: Physical, Digital, or both
- One or more owned platforms
- Announced release platforms when applicable
- Current status
- Favorite state
- Completion percentage when applicable

---

## 3. User Scenarios

### Scenario 1: Find an owned game
- **Actor:** Gamer
- **Trigger:** The user wants to know whether they already own a game and on which platform.
- **Steps:**
  1. Open VGC Library.
  2. Search for the game by title or browse the collection.
  3. Review the ownership and platform information shown with the game.
- **Success outcome:** The user can tell whether the game is in the collection and which platform or platforms are associated with it.
- **Failure outcome:** The game cannot be found, ownership is unclear, or the platform is missing.

### Scenario 2: Browse and filter the collection
- **Actor:** Gamer
- **Trigger:** The user wants to browse a specific part of the collection.
- **Steps:**
  1. Open the library.
  2. Choose card or list view.
  3. Apply a status, platform, or favorites filter.
  4. Browse the matching games.
- **Success outcome:** Only matching games are displayed and the active filter is clear.
- **Failure outcome:** Incorrect games are shown or the active filter is unclear.

### Scenario 3: View game details
- **Actor:** Gamer
- **Trigger:** The user selects a game.
- **Steps:**
  1. Select a game card or list item.
  2. View title, cover, platform, genre, description, ownership, ownership type, status, favorite state, release information, and completion percentage when applicable.
- **Success outcome:** The user can review the selected game's important collection information in one view, including whether an owned game is Physical or Digital.
- **Failure outcome:** The wrong game opens or key information is missing.

### Scenario 4: Update game progress
- **Actor:** Gamer
- **Trigger:** The user's play status changes.
- **Steps:**
  1. Open the game's detail view.
  2. Choose a new status.
  3. If the game is Playing, optionally enter a completion percentage from 0–100.
  4. Return to the library.
- **Success outcome:** The new status and completion information are shown and remain after a normal refresh when browser storage is available.
- **Failure outcome:** The change is not visible or is lost unexpectedly.

### Scenario 5: Manage favorites
- **Actor:** Gamer
- **Trigger:** The user wants quick access to a game they care about.
- **Steps:**
  1. Mark the selected game as a favorite.
  2. Return to the library.
  3. Select the Favorites filter.
- **Success outcome:** The game appears in the Favorites view and is clearly marked as a favorite.
- **Failure outcome:** The favorite state is unclear or the game does not appear in the Favorites filter.

### Scenario 6: Add an unreleased game to Want to Play
- **Actor:** Gamer
- **Trigger:** The user wants to keep track of a game that has not been released yet.
- **Steps:**
  1. Open or select an unreleased game from the sample collection.
  2. Mark the game as Want to Play.
  3. Leave the game marked as not owned.
  4. Review the future release information.
- **Success outcome:** The unreleased game stays in Want to Play without being marked as owned.
- **Failure outcome:** The app forces the game to be owned or does not show that the game has a future release date.

---

## 4. Requirements (EARS notation)

| ID | Requirement | Pattern |
|----|-------------|---------|
| R1 | The system shall display all available games when no search or filter is active. | Ubiquitous |
| R2 | The system shall display game cards by default with cover image, title, ownership state, owned platform, and status. | Ubiquitous |
| R3 | When a user selects list view, the system shall display the same collection in a compact list format. | Event |
| R4 | When a user selects a game, the system shall display that game's detailed information. | Event |
| R5 | When a user enters text in the search field, the system shall display games whose titles match the entered text. | Event |
| R6 | When a user selects a status filter, the system shall display only games assigned to that status. | Event |
| R7 | When a user selects a platform filter, the system shall display only games associated with that platform. | Event |
| R8 | When a user selects the Favorites filter, the system shall display only games marked as favorites. | Event |
| R9 | When a user changes a game's status, the system shall update the game to the selected status. | Event |
| R10 | When a user marks a non-favorite game as a favorite, the system shall show the game as a favorite. | Event |
| R11 | When a user removes favorite status, the system shall remove the favorite indicator. | Event |
| R12 | When a user records one or more owned platforms, the system shall associate those platforms with the selected game. | Event |
| R13 | When a Playing game receives a completion percentage, the system shall accept and display a whole-number value from 0 through 100 percent. | Event |
| R14 | If a completion percentage is below 0 or above 100, then the system shall reject the value and ask the user to enter a value from 0 through 100. | Unwanted behavior |
| R15 | If a search or filter returns no games, then the system shall display a clear no-results message. | Unwanted behavior |
| R16 | While a search or filter is active, the system shall clearly indicate the active search term or filter. | State |
| R17 | When the user selects the back control from the detail view, the system shall return to the library. | Event |
| R18 | Where browser local storage is available, the system shall preserve status, favorites, ownership/platform, ownership type, completion percentage, and view preference across normal page refreshes. | Optional |
| R19 | If browser local storage is unavailable, then the system shall continue to function for the current session without blocking the user. | Unwanted behavior |
| R20 | The system shall use a simulated/local dataset of 12 games for the prototype. | Ubiquitous |
| R21 | While a game has the status Want to Play, the system shall allow the game to remain marked as not owned. | State |
| R22 | While a game is marked as owned on more than one platform, the system shall display all associated owned platforms. | State |
| R23 | When a user owns a game on one or more platforms, the system shall allow the user to select Physical, Digital, or both ownership types separately for each owned platform. | Event |
| R24 | While a game has the No Longer Interested status, the system shall display that status without requiring an additional explanation. | State |
| R25 | When an unreleased game is marked Want to Play, the system shall allow the game to remain not owned and display its future release date when available. | Event |
| R26 | When an unreleased game has announced release platforms, the system shall display those platforms separately from platforms the user owns. | Event |

---

## 5. Acceptance Criteria

| Requirement | Test | Pass condition |
|-------------|------|----------------|
| R1 | Open the application with no search or filters active. | All 12 sample games are displayed. |
| R2 | Open the library in its default state. | Each game card shows cover, title, ownership state, owned platform when applicable, and status. |
| R3 | Select list view. | The collection changes to a compact list without losing required game information. |
| R4 | Select a game. | The detail view shows information for the selected game only. |
| R5 | Search for a known title. | Matching games are shown and unrelated games are hidden. |
| R6 | Select a status filter. | Only games with that status are displayed. |
| R7 | Select a platform filter. | Only games associated with that platform are displayed. |
| R8 | Select Favorites. | Only favorite games are displayed. |
| R9 | Change a game's status. | The new status is immediately visible. |
| R10 | Favorite a non-favorite game. | A favorite indicator appears and the game is included in Favorites. |
| R11 | Remove favorite status. | The favorite indicator disappears and the game is removed from Favorites. |
| R12 | Add two owned platforms to one game. | Both platforms appear with the selected game. |
| R13 | Enter 60 for a Playing game's completion percentage. | The detail view displays 60%. |
| R14 | Enter -1 or 101 as a completion percentage. | The value is not saved and the user receives a clear validation message. |
| R15 | Search for a nonexistent title or use an empty filter. | A clear no-results message is displayed. |
| R16 | Apply a search or filter. | The active search term or filter remains visible. |
| R17 | Use the back control from the detail view. | The user returns to the library. |
| R18 | Change status/favorite, refresh the page, and reopen the game. | The changes remain when local storage is available. |
| R19 | Test with storage blocked or unavailable. | Core browsing, search, filtering, and in-session changes still work. |
| R20 | Run the prototype without a remote database. | Exactly 12 sample games load from local project data. |
| R21 | Set an unowned game to Want to Play. | The game keeps Want to Play status without being forced to Owned. |
| R22 | Mark a game as owned on two platforms. | Both platforms remain visible in the collection/detail information. |
| R23 | Mark a game as both Physical and Digital on PS5 and Digital on Switch. | Each platform displays and saves its selected ownership types independently. |
| R24 | Set a game to No Longer Interested and view its status information. | No Longer Interested is visible without requiring an additional explanation. |
| R25 | Mark an unreleased game as Want to Play. | The game remains not owned and its future release date is displayed when available. |
| R26 | Open an unreleased game with announced release platforms. | The planned release platforms are displayed separately from owned platforms. |

---

## 6. Constraints & Non-Functional Requirements

- **Performance:** With the 12-game prototype dataset, the library, search results, filters, view changes, and detail views should update without noticeable delay during normal use.
- **Security/Privacy:** The prototype will not collect passwords, payment information, personal profiles, or external gaming credentials. Browser storage will contain only prototype collection preferences and status data.
- **Accessibility:** Text must be readable with sufficient contrast. Controls must have clear text or accessible labels, keyboard focus should be visible, images should have useful alternative text, and status/favorite information must not rely on color alone.
- **Compliance/Legal:** Third-party game names, logos, and artwork remain the property of their respective owners and are used only as appropriate for an educational prototype. The project will not claim ownership of third-party game content.
- **Budget/Timeline:** The first version must remain small enough to complete during the course using the existing web app template and static web technologies.

---

## 7. Open Questions

All first-version questions identified during drafting and user research have been resolved for this specification.

| Question | Owner | Status |
|----------|-------|--------|
| Should completion percentage be manually entered or controlled with a slider? | Spec owner | Resolved — use a numeric field from 0–100 for clearer and more precise entry. |
| Should a game support more than one owned platform at the same time? | Spec owner | Resolved — yes. |
| Should card or list view be the default? | User research | Resolved — card view is default; list view is optional. |
| Which filters are required for the first version? | User research | Resolved — status, platform, and favorites. |
| Should live sales, achievements, mods, launching games, and custom artwork be included? | Spec owner | Resolved — no; these are future/out-of-scope features. |
| Should Want to Play include games the user does not yet own? | Spec owner | Resolved — yes, including unreleased games. |
| Should owned games show Physical or Digital ownership? | Prototype evaluation | Resolved — yes. |
| Does the No Longer Interested status need an additional explanation? | Prototype evaluation | Resolved — no; the status label is sufficient. |
| How many games should be included in the prototype dataset? | Spec owner | Resolved — 12 sample games. |

---

## 8. Plan

Once this specification is approved, translate it into:

- **`plan.md`** — the approach and key decisions, each traced back to a requirement ID above.
- **`tasks.md`** — atomic, ordered, checkable tasks derived from the plan.

Do not skip from the specification directly to implementation without reviewing the plan first.

---

## 9. Approval

| Role | Name | Date | Signed off? |
|------|------|------|-------------|
| Spec owner | | | |
| Reviewer | | | |

## 10. Revision History

| Date | Revision | Impact |
|------|----------|--------|
| 2026-09-28 | Recorded implementation alignment through T22. | At the time of this entry, planned release-platform display remained outside the approved specification. |
| 2026-09-28 | Approved R26 for separate unreleased-game release-platform display. | Add `releasePlatforms` as a distinct field from owned `platforms`; Grand Theft Auto VI will use PS5. |
| 2026-09-28 | Revised R24 to replace Dropped with No Longer Interested. | Remove the Dropped explanation requirement and use the new status in the approved status list. |
| 2026-09-28 | Revised R23 for per-platform ownership types. | Replace the game-wide ownership type with `platformOwnership`, allowing examples such as PS5 Physical and Switch Digital. |
| 2026-09-28 | Revised R23 to allow both ownership types per platform. | `platformOwnership` values may contain Physical, Digital, or both for each owned platform. |

---

### Primary sources this template draws on

- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/) — specification-driven development guidance


### Plan

# Plan — Video Game Collection Library (VGC Library)

## 1. Approach Summary

VGC Library will be built as a simple front-end web application using HTML, CSS, and JavaScript. The app will use a local set of 12 games instead of an outside database or API. Users will be able to view and organize games, search and filter the collection, update game information, and save changes in the browser using localStorage.

## 1.5 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend/DB: None
- Data: Local JavaScript dataset
- Hosting: GitHub Pages
- Storage: Browser localStorage
- Other services/APIs: None for the first version

## 2. Key Decisions (ADRs)

| ADR # | Decision | Traces to (R#) | Alternatives considered | Why this one |
|-------|----------|------------------|---------------------------|--------------|
| ADR-00 | Use HTML, CSS, and JavaScript for the application. | R1-R17 | React or another frontend framework | The project is small enough that a framework is not needed. This also makes it easier to work from the course template. |
| ADR-01 | Use a local dataset with 12 games. | R20 | External database or game API | The specification only requires a small prototype and does not require outside data. |
| ADR-02 | Use browser localStorage to save changes. | R18, R19 | Database storage or session-only storage | localStorage allows changes to stay saved without needing accounts, a server, or a database. |
| ADR-03 | Use game cards as the default view and also provide a list view. | R2, R3 | Card view only or list view only | The user surveys showed that users liked seeing game covers, but some also wanted a list option. |
| ADR-04 | Use client-side search and filters. | R5, R6, R7, R8, R15, R16 | Server-side searching and filtering | The game collection is small, so the browser can handle searching and filtering without a server. |
| ADR-05 | Allow more than one platform to be connected to a game. | R12, R22 | Only allow one platform per game | Users may own the same game on more than one platform, so only allowing one would not match how they use their collections. |
| ADR-06 | Include Physical and Digital ownership types. | R23 | Only show owned or not owned | Prototype testing showed that users wanted to know how they owned the game. |
| ADR-07 | Use No Longer Interested as a status without an additional explanation. | R24 | Keep Dropped with an explanation | The revised status wording is direct and does not need extra interface text. |
| ADR-08 | Allow unreleased games to be marked Want to Play without being owned. | R21, R25 | Only allow released or owned games | A tester wanted a way to keep track of games that have not been released yet. |
| ADR-09 | Use a numeric field from 0-100 for completion percentage. | R13, R14 | Slider or no progress field | A number gives the user a clear way to enter exact completion progress. |
| ADR-10 | Store announced release platforms separately from owned platforms. | R26 | Reuse the owned-platform field | Planned availability must not imply that the user owns the game. |
| ADR-11 | Store one or both ownership types separately for each owned platform. | R23 | Keep one ownership type per game or force one type per platform | A user may own physical and digital copies on the same system. |
| ADR-12 | Reuse the existing route and detail-navigation structure for the prototype. | R4, R17 | Add a new navigation architecture | Keeping the existing route structure preserves the simple template flow and supports detail/back navigation. |
| ADR-13 | Apply the approved accessibility and design-system rules to interactive controls and visual presentation. | R1-R17, R21-R26 | Add a separate UI framework or accessibility layer | The existing HTML, CSS, and JavaScript structure can meet the documented readability, labeling, focus, contrast, and responsive-layout expectations. |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Local Game Dataset | Stores the 12 sample games and their information. | R20 |
| Card View | Shows games using game-cover cards with basic information. | R1, R2 |
| List View | Shows the same games in a smaller list format. | R3 |
| Search | Lets users search for games by title. | R5, R15, R16 |
| Status Filter | Filters games by Want to Play, Not Started, Playing, Completed, or No Longer Interested. | R6, R15, R16 |
| Platform Filter | Filters the collection based on platform. | R7, R15, R16 |
| Favorites Filter | Shows only games marked as favorites. | R8 |
| Game Detail View | Shows more information about one game. | R4 |
| Status Editor | Lets users change the status of a game. | R9, R21, R24, R25 |
| Favorite Control | Lets users add or remove a game from Favorites. | R10, R11 |
| Ownership Editor | Lets users mark games as owned, choose platforms, and select Physical or Digital ownership for each platform. | R12, R22, R23 |
| Completion Percentage | Lets users enter progress from 0-100. | R13, R14 |
| Release Information | Shows release information, including future release dates and announced release platforms. | R25, R26 |
| localStorage | Saves game changes and view settings in the browser. | R18, R19 |
| No Results Message | Lets the user know when a search or filter does not return any games. | R15 |

## 4. Dependencies & Assumptions

### Dependencies

- Modern web browser
- GitHub repository
- GitHub Pages
- Existing course web app template
- Browser localStorage when available

There are no outside APIs or databases required for the first version.

### Assumptions

- The prototype will only use 12 games.
- Users will use a modern browser.
- JavaScript will be enabled.
- localStorage will normally be available, but it may be blocked or cleared.
- The sample game information will be entered manually.
- The application is being developed as a course prototype and not a production system.
- Game artwork and information used in the prototype will only be used for educational purposes.

## 5. Risks

| Risk | Likelihood | Impact | Mitigation | Owner |
|------|------------|--------|------------|-------|
| localStorage is blocked or cleared. | Medium | Medium | Allow the app to continue working during the current session even if the information cannot stay saved. | Developer / Spec owner |
| Search or filters display the wrong games. | Medium | Medium | Test each filter and search option using the acceptance criteria. | Developer / Spec owner |
| Multiple platform ownership becomes confusing. | Medium | Medium | Clearly show all selected platforms on the detail page and library view. | Developer / Spec owner |
| Users do not understand the No Longer Interested status. | Low | Low | Use the direct status label without requiring an additional explanation. | Developer / Spec owner |
| Invalid completion percentages are entered. | Medium | Low | Only allow whole numbers between 0 and 100 and show an error for invalid values. | Developer / Spec owner |
| Changes to the original template break the layout. | Medium | Medium | Make changes in smaller steps and test the app after each major change. | Developer / Spec owner |
| Too many new features are added. | High | Medium | Follow the specification and keep features such as sales, achievements, mods, and automatic imports out of the first version. | Developer / Spec owner |
| GitHub Pages paths are incorrect. | Low | Medium | Test the published links in a browser before submitting the project. | Developer / Spec owner |
| Game artwork does not load or causes copyright concerns. | Medium | Medium | Use appropriate educational images or placeholders and avoid claiming ownership of game artwork. | Developer / Spec owner |
| The layout does not work well on smaller screens. | Medium | Medium | Test the layout at different browser sizes and adjust the CSS when needed. | Developer / Spec owner |

## 6. Sequencing

1. **Review the existing course template.**  
   This should be done first so I understand what parts of the current app can be reused instead of rebuilding everything.

2. **Create the local 12-game dataset.**  
   The other parts of the app need game information to display and test.

3. **Build the default card view.**  
   This will make sure the game data can be displayed correctly.

4. **Build the game detail view.**  
   This allows the user to select a game and see the rest of its information.

5. **Add the list view.**  
   Once the card view works, the same game data can also be displayed in a list.

6. **Add search.**  
   Users should be able to search the local game collection by title.

7. **Add status, platform, and Favorites filters.**  
   These filters depend on the game data already being displayed.

8. **Add game status editing.**  
    Users can change games between Want to Play, Not Started, Playing, Completed, and No Longer Interested.

9. **Add Favorites editing.**  
   Users can mark or remove favorite games.

10. **Add ownership and platform editing.**  
    Users can mark games as owned and choose one or more platforms.

11. **Add Physical and Digital ownership.**  
    This builds on the ownership feature and adds the ownership type.

12. **Add completion percentage.**  
    Users can enter progress between 0 and 100, with validation for incorrect values.

13. **Add unreleased games and future release dates.**  
    Unreleased games can be kept in Want to Play without being marked as owned.

14. **Add localStorage.**  
    Status, favorites, ownership, platforms, ownership type, progress, and view settings can stay saved after a page refresh.

15. **Add no-results and validation messages.**  
    Users should receive clear feedback when searches return no games or incorrect information is entered.

16. **Test the acceptance criteria.**  
    Each requirement should be tested against the acceptance criteria from the specification.

17. **Review accessibility and responsive layout.**  
    The app should be checked for readable text, labels, keyboard focus, and smaller screen sizes.

18. **Publish and verify with GitHub Pages.**  
    The final app and design documents should be checked in the browser before submission.

## 7. Review & Approval

| Reviewer | Date | Approved? |
|----------|------|-----------|
| Spec owner | | |

## 8. Revision History

| Date | Revision | Impact |
|------|----------|--------|
| 2026-09-28 | Recorded implementation alignment through T22. | At the time of this entry, no new ADR was approved and `releasePlatforms` remained a proposal. |
| 2026-09-28 | Approved ADR-10 for separate release-platform data. | Add `releasePlatforms` for unreleased games; Grand Theft Auto VI will list PS5 while remaining not owned. |
| 2026-09-28 | Revised ADR-07 and R24 status wording. | Replace Dropped with No Longer Interested and remove the explanation behavior. |
| 2026-09-28 | Approved ADR-11 for per-platform ownership types. | Add `platformOwnership` so PS5 and Switch can store different Physical/Digital values. |
| 2026-09-28 | Revised ADR-11 to allow both types per platform. | Each `platformOwnership` value is now an array of selected Physical/Digital types. |


### Tasks

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


### Design System

# Design System — Video Game Collection Library (VGC Library)

## 1. Brand Principles

VGC Library should have a clean and modern gaming look without making the app feel too busy. The design should make it easy for users to find their games, see important information, and update their collection without having to figure out complicated menus.

The app should feel organized, simple, and easy to use while still looking like a gaming application.

## 2. Color Palette

| Name | Hex | Use |
|------|-----|-----|
| Primary | #6C63FF | Main buttons, selected options, and important actions |
| Secondary | #00B8D9 | Links, highlights, and smaller accents |
| Background | #121212 | Main page background |
| Surface | #1E1E1E | Game cards, menus, and content sections |
| Text | #F5F5F5 | Main text |
| Muted Text | #B0B0B0 | Secondary information and descriptions |
| Error | #FF5A5F | Errors and invalid information |

The colors should stay consistent throughout the app. The dark background helps give the app more of a gaming look while the Primary and Secondary colors make important actions easier to see.

## 3. Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Heading 1 | Arial, sans-serif | 32px | Bold |
| Heading 2 | Arial, sans-serif | 24px | Bold |
| Heading 3 | Arial, sans-serif | 18px | Bold |
| Body | Arial, sans-serif | 16px | Regular |
| Small Text | Arial, sans-serif | 14px | Regular |
| Button Text | Arial, sans-serif | 16px | Bold |

Arial will be used throughout the app to keep the design simple and readable. Using one main font also keeps the design consistent between different screens.

## 4. Logo Usage

- Current logo: use the text name **VGC Library** in the main header until a separate logo asset is created.
- If a logo file is added later, store it in the project assets folder and update this section with the file location.
- Keep enough space around the logo or wordmark so it does not look crowded.
- Do not stretch or change the shape of the logo.
- Do not recolor a logo unless another approved version is created.
- Do not place the logo on a background that makes it hard to see.

## 5. Spacing & Grid

- Base unit: 8px
- Maximum content width: 1200px
- Standard spacing scale: 8 / 16 / 24 / 32 / 48px
- Main page content should have at least 16px of space from the edge of the screen.
- Game cards should have even spacing between them.
- Cards should adjust based on screen size.
- Smaller screens can use fewer columns or one column when needed.

The 8px spacing system should be used throughout the app so the layout stays consistent.

## 6. Core Components

| Component | Rules |
|-----------|-------|
| Button (Primary) | Primary color background, light text, 8px corner radius, clear label, and enough padding to make it easy to click. |
| Button (Secondary) | Surface or transparent background, visible border, light text, and 8px corner radius. |
| Game Card | Surface background, game cover image, title, platform, ownership, and status. Use an 8px corner radius and consistent padding. |
| List Item | Show the same basic game information as the card view but in a smaller horizontal layout. |
| Form Field | Label should appear above or beside the field. Inputs should have a clear border and visible focus state. |
| Search Field | Place near the top of the library. Include placeholder text showing users can search by game title. |
| Filter | Clearly show which filter is selected. Status, platform, and Favorites filters should use the same style. |
| Status Badge | Display the current game status using text. Color should not be the only way the status is identified. |
| Favorite Control | Use a clearly labeled icon or button to add or remove a game from Favorites. |
| Navigation | Keep navigation simple and only include options needed for VGC Library. |
| Error Message | Show close to the field or action that caused the problem. Use the Error color and short wording explaining what needs to be fixed. |
| No Results Message | Clearly tell the user that no games match the current search or filters and give them a way to reset the search or filters. |

## 7. Voice & Tone

The app should use simple and direct wording.

- Tone: casual, clear, and short.
- Avoid technical or complicated wording.
- Buttons should clearly describe what they do.
- Error messages should explain what needs to be changed.
- Do not use too much humor because important information should still be easy to understand.

Examples:

- Use **Add to Favorites** instead of **Save Item to Favorite Collection**.
- Use **No games found** instead of **Your query returned zero results**.
- Use **Enter a number from 0 to 100** instead of **Invalid completion value**.
- Use **No Longer Interested** as a direct status label without requiring an additional explanation.

## 8. Accessibility Standards

- Minimum contrast ratio: 4.5:1 for normal text.
- Standard to meet: WCAG 2.1 AA.
- Text should remain readable against the dark background.
- Do not use color by itself to show status or important information.
- Buttons and form fields should have visible labels.
- Keyboard focus should be easy to see.
- Game cover images should have alt text when possible.
- Interactive elements should be large enough to easily select.
- Error messages should use text along with color.
- The layout should remain usable at different screen sizes.

## 9. Version & Change Log

| Version | Date | Change | Approved by |
|---------|------|--------|-------------|
| 1.0 | 2026-09-28 | Initial VGC Library design system finalized for front-end build | Pending spec-owner sign-off |

