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
| ADR-07 | Keep Dropped as a status but explain what it means. | R24 | Remove the Dropped status | Some users wanted the status, but prototype testing showed that the meaning was not clear to everyone. |
| ADR-08 | Allow unreleased games to be marked Want to Play without being owned. | R21, R25 | Only allow released or owned games | A tester wanted a way to keep track of games that have not been released yet. |
| ADR-09 | Use a numeric field from 0-100 for completion percentage. | R13, R14 | Slider or no progress field | A number gives the user a clear way to enter exact completion progress. |

## 3. Components / Building Blocks

| Component | Purpose | Related requirements |
|-----------|---------|------------------------|
| Local Game Dataset | Stores the 12 sample games and their information. | R20 |
| Card View | Shows games using game-cover cards with basic information. | R1, R2 |
| List View | Shows the same games in a smaller list format. | R3 |
| Search | Lets users search for games by title. | R5, R15, R16 |
| Status Filter | Filters games by Want to Play, Not Started, Playing, Completed, or Dropped. | R6, R15, R16 |
| Platform Filter | Filters the collection based on platform. | R7, R15, R16 |
| Favorites Filter | Shows only games marked as favorites. | R8 |
| Game Detail View | Shows more information about one game. | R4 |
| Status Editor | Lets users change the status of a game. | R9, R21, R24, R25 |
| Favorite Control | Lets users add or remove a game from Favorites. | R10, R11 |
| Ownership Editor | Lets users mark games as owned, choose platforms, and select Physical or Digital ownership. | R12, R22, R23 |
| Completion Percentage | Lets users enter progress from 0-100. | R13, R14 |
| Release Information | Shows release information, including future release dates. | R25 |
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
| Users do not understand the Dropped status. | Medium | Low | Add a short explanation of what Dropped means. | Developer / Spec owner |
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
   Users can change games between Want to Play, Not Started, Playing, Completed, and Dropped.

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
