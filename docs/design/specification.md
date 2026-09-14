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
- Support the statuses "Want to Play," "Not Started," "Playing," "Completed," and "Dropped."
- Allow "Want to Play" to be used for games the user does not yet own, including unreleased games.
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
| Dropped | The user started the game but stopped playing it and does not currently plan to finish it. The interface should include a short explanation so the meaning is clear. |

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
- Ownership type: Physical or Digital when the game is owned
- One or more owned platforms
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
| R23 | When a user marks a game as owned, the system shall allow the user to select Physical or Digital as the ownership type. | Event |
| R24 | While a game has the Dropped status, the system shall display a short explanation that the user stopped playing and does not currently plan to finish the game. | State |
| R25 | When an unreleased game is marked Want to Play, the system shall allow the game to remain not owned and display its future release date when available. | Event |

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
| R23 | Mark an owned game as Physical, then change it to Digital. | The selected ownership type is shown and saved correctly. |
| R24 | Set a game to Dropped and view its status information. | A short explanation of Dropped is visible. |
| R25 | Mark an unreleased game as Want to Play. | The game remains not owned and its future release date is displayed when available. |

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
| Does the Dropped status need more explanation? | Prototype evaluation | Resolved — yes, include a short explanation in the interface. |
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

---

### Primary sources this template draws on

- [GitHub Spec Kit](https://github.com/github/spec-kit) — open-source spec/plan/tasks toolkit
- [Spec-Driven Development methodology](https://github.com/github/spec-kit/blob/main/spec-driven.md) — GitHub's explainer
- [EARS notation](https://alistairmavin.com/ears/) — requirements syntax
- [Microsoft: Spec-Driven Development for AI-Native Engineering](https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/) — specification-driven development guidance
