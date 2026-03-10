```markdown
# CMS

## What This Project Does
This project is a simple content management system (CMS) built using React and Firebase. It allows a user to input text into a text box and update a Firestore document named "main" with that text.  The `adminSite` and `mainSite` components both display the same content retrieved from Firestore, demonstrating a basic content synchronization mechanism.

## Tech Stack
*   **Language:** JavaScript (ES6+)
*   **Framework:** React
*   **Database:** Firebase Firestore
*   **Other:** Firebase SDK

## Project Structure
*   `adminSite`: Contains the React application for managing the content.
*   `mainSite`: Contains the React application for displaying the content.
*   `firebase.js`:  Contains the Firebase initialization code and Firestore database connection.
*   `App.jsx`: The main React component for both sites, handling input and data retrieval.
*   `App.css`:  CSS styles for the application components.

## Getting Started
1.  Make sure you have Node.js and npm installed.
2.  Clone the repository: `git clone git@github.com:danibarker/cms.git`
3.  Navigate to the project directory: `cd cms`
4.  Install dependencies: `npm install`
5.  Run the development server: `npm start` (This will likely open the application in your browser).

## Status
Incomplete - The application is functional but lacks any user authentication, persistent storage beyond Firestore, or a front-end design beyond basic text display.

## Notes
*   The Firebase configuration is hardcoded in `firebase.js`.  This should be moved to environment variables for production.
*   The project uses React's `useEffect` hook for fetching data from Firestore.
*   The `docRef` variable is logged to the console for debugging purposes.
*   The project uses the same Firebase configuration for both the admin and main sites.

```
