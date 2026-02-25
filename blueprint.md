
# Blueprint: lineup - AI-Powered Movie Recommender

## 1. Project Overview

**Purpose:** `lineup` is a web application designed to provide users with quick, "3-line summary" movie and TV show recommendations based on their mood or situation. It aims to solve the common problem of endlessly scrolling through streaming services (OTT) without making a decision.

**Target Audience:** Users who enjoy watching movies and series on various streaming platforms but often struggle to choose what to watch.

**Core Feature:** Users can type a query describing what they feel like watching (e.g., "a fun revenge drama for the weekend"), and the AI provides a curated recommendation with a catchy, three-line summary designed to pique their interest.

## 2. Design and Aesthetics

The design follows modern, bold, and visually engaging principles to create a premium user experience.

*   **Layout:** A clean, responsive layout with a main content area and a sidebar for supplementary information (like recent searches). It uses a sticky navigation bar and category bar for easy access.
*   **Color Palette:**
    *   `--primary`: #E50914 (Netflix-inspired red for key accents)
    *   `--bg-color`: #141414 (Dark, cinema-like background)
    *   `--box-bg`: #2b2b2b (Slightly lighter background for cards and boxes)
    *   `--text-main`: #ffffff (Primary text color)
    *   `--text-sub`: #b3b3b3 (Subtle text for descriptions)
    *   Interactive elements use bright, eye-catching colors like `#00bbf9`.
*   **Typography:** Uses the `Pretendard Variable` font, a modern and highly readable sans-serif font suitable for both Korean and English text.
*   **Iconography:** Utilizes emojis (e.g., 🍿, 🔥, 🤖) to provide quick visual cues and a friendly feel.
*   **Visual Effects:**
    *   The logo has a playful hover effect where each letter lifts slightly.
    *   Cards have a subtle `translateY` hover effect and a border color change to feel more interactive.
    *   The "scroll to top" button uses `backdrop-filter` for a modern, glassy look.

## 3. Implemented Features & Application Structure

The application is built with framework-less, modern web standards (HTML, CSS, JavaScript).

### 3.1. File Structure

*   `index.html`: The main HTML file containing the structure of the application.
*   `style.css`: Contains all the styles for the application, separated for maintainability.
*   `main.js`: Handles all the application's logic and interactivity.

### 3.2. Core Components

1.  **Navigation Bar (`.navbar`):**
    *   A sticky header that stays at the top of the page.
    *   Features a colorful, animated logo.
    *   Includes a language selector and buttons for "My List" and "Login."

2.  **Category Bar (`.category-bar`):**
    *   A scrollable horizontal bar with mood-based categories (e.g., "🔥 Hot Picks," "😭 Tearjerker Alert").
    *   Highlights the active category.

3.  **Search Area (`.search-area`):**
    *   The main call-to-action section.
    *   A large headline and a descriptive paragraph.
    *   An input field for the user's query and an "AI Recommend" button.

4.  **Results Section (`#results`):**
    *   This area is initially hidden and appears after a search.
    *   Displays the recommended movie/show in a `.movie-card`.
    *   **Movie Card:**
        *   Shows the title, a "match rate" percentage, and a button to add to favorites.
        *   Includes relevant tags (`#Revenge`, `#Binge-worthy`).
        *   Features the core "3-line summary" in a distinctively styled box (`.summary-box`).

5.  **Sidebar (`.sidebar`):**
    *   A sticky container that stays visible on scroll.
    *   Displays the user's recent search history.

### 3.3. JavaScript Functionality

*   **Internationalization (i18n):**
    *   The `translations` object in `main.js` stores strings for Korean, English, Japanese, and Chinese.
    *   The `changeLanguage()` function dynamically updates the text on the page based on the language selected in the dropdown.
*   **AI Search Simulation (`analyzeContent()`):**
    *   Triggered by clicking the search button or pressing Enter in the search field.
    *   It currently *simulates* an AI response with a `setTimeout` function.
    *   Displays a loading message and then shows a hardcoded result for "The Glory."
*   **Recent Searches (`updateRecentView()`):**
    *   When a search is performed, the query is added to the "Recent Searches" list in the sidebar.
*   **UI Interactions:**
    *   A "Scroll to Top" button (`#scrollTopBtn`) appears when the user scrolls down the page.
    *   Event listeners are properly attached in `main.js` using `addEventListener` for clean separation of concerns.

## 4. Plan for Current Request

*This section will be updated with plans for new feature requests.*
