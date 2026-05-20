# Pensumtorget UiO - Working Notes

## User Goal
Create an MVP website prototype for a UiO syllabus-book marketplace, as part of an investigation into what semi-agentic AI can build. The result should be comparable with work by someone with less technical knowledge.

## Approved Scope
Proceed with the MVP proposal:
- Course-based marketplace for UiO syllabus books.
- Mocked frontend prototype, no backend.
- Search, filters, listing cards, detail view, seller/contact flow, create-listing form, and seller dashboard.
- Student trust features represented as UI concepts: UiO verification, seller rating, completed sales, campus pickup, report/save actions.

## Current Implementation
Created a static site in `/Users/martinluzi/Downloads/HON1000`:
- `index.html` - App structure and views.
- `styles.css` - Responsive marketplace UI styling.
- `app.js` - Mock data, filtering/search/sorting, modals, mock publish flow.

## Current Features
- Prepared for GitHub Pages hosting as a static project. Added `.nojekyll` and a `README.md` with Pages deployment steps.
- EN/NO language toggle in the header; Norwegian translation covers static UI, filters, cards, modals, dashboard text, toast messages, and key mocked listing notes.
- Updated top-left branding with a book-stack mark, stronger Pensumtorget UiO wordmark, and compact bilingual tagline.
- Browse grid now treats each book as the primary object: cards aggregate multiple seller listings and show Average price plus Average Condition.
- Book detail modal now lists all individual seller listings for that book, each with seller, price, condition, pickup, verification, rating, note, contact/save/report actions.
- Mock catalogue expanded from 8 to 22 active listings with several books having multiple seller offers.
- Filtering improved with faculty and course dropdowns. Faculty selection narrows both course options and course chips; course selection narrows the book grid.
- Added My favourites tab. Users can favourite book objects from book cards or the book detail modal, review saved books in one overview, and remove them again. Favourites persist in localStorage.
- My listings now supports two-step deletion. Clicking Delete reveals Verify delete and Cancel; verified deletion removes seed dashboard items from the dashboard and user-created sell-form listings from both the dashboard and marketplace book data.
- Added browser persistence for marketplace listings, seller dashboard listings, favourites, and message/reservation threads using localStorage.
- Added a mock verified UiO identity chip in the header with student verification and completed sales.
- Added a Messages tab for buyer flow. Contacting a seller creates a mock message thread; requesting reservation marks the seller listing as reserved and records a reservation thread.
- Added semester filtering and a course-context panel with faculty, semester, department, and number of listed syllabus books.
- Expanded catalogue realism with additional faculties/courses: Educational Sciences/PED1001 and Medicine/MED1100, plus more listings and course metadata.
- Browse/search by course code, course name, title, author, seller, or pickup area.
- Course chips for popular UiO courses.
- Filters for condition, max price, and pickup area.
- Sort by newest, lowest price, highest price, and seller rating.
- Listing detail modal with mocked seller trust information.
- Contact seller modal with prefilled message.
- Sell form that adds a new listing into the current page session.
- Seller dashboard with mocked listing status, views, and saves.
- Responsive layout for desktop and mobile.

## Verification Still Needed
- Mobile-width screenshot verification could still be added if a local browser automation package becomes available.

## Notes
- This is intentionally a self-contained static frontend so it works without dependency installation or a dev server.
- The app uses mocked data and generated visual book covers, not real UiO APIs or copyrighted book images.
- Direct `file://` browsing was blocked by browser policy during verification, so the app was served locally with `python3 -m http.server 4173`.
- Verified JavaScript syntax with `node --check app.js`.
- Verified in the browser: initial page load, search, listing detail modal, contact modal, mock sell form submission, dashboard route, and a desktop visual screenshot.
- Changed the sell form price field from `type="number"` to a numeric text field to avoid browser automation issues and keep form entry reliable.
