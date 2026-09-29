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
- Use **Dropped means you started the game but do not plan to finish it** when explaining the Dropped status.

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
| 1.0 | 2026-09-28 | Initial VGC Library design system finalized for front-end build | Spec owner |
