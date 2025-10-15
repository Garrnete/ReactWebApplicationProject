## Sorting Hat Portal 🧙🏻‍♂️

A magical React web application where users can take a Sorting Hat quiz, discover their Hogwarts house, browse house members, save favorite characters, and enjoy animated, Hogwarts-themed UI.

## Technologies Used:

React – Frontend framework for building interactive UI

Redux Toolkit – State management for house selection, characters, and favorites

React Router DOM – Page navigation (Home, Sorting, House, Favorites)

Framer Motion – Animations for cards, quiz transitions, hover glow, and floating effects

HP API – Fetch house characters dynamically (https://hp-api.onrender.com/api/characters/house/{house})

CSS & Google Fonts (Cinzel, Galindo) – Hogwarts-themed styling and magical fonts

AJAX / Fetch – Retrieves external data dynamically

## Features:
Core Features (MVP)

Sorting Hat Quiz – 4+ question quiz with house scoring

House Dashboard – Shows house traits and characters

Character List – Displays characters fetched via HP API with Redux thunk

Favorites – Add/remove characters to favorites; persists in Redux

Responsive Design – Works on mobile and desktop

Loading Spinner & Error Handling – Displays while fetching data or if API fails

Animations – Framer Motion for hover effects, transitions, and card animations

## Bonus Features / Add-ons:

House-colored hover glow for characters

Magical fonts: Galindo (body), Cinzel (names)

Background sparkle effects (optional magical floating animations)

Fallback images for characters without photos

Favorites hover animation for interactivity

## Approach Taken:

1. Planning & Wireframes – Mapped pages, components, and Redux slices

2. Redux Slices:

     houseSlice – Stores selected house

     charactersSlice – Async thunk to fetch house characters

     favoritesSlice – Manages user favorites

3. Component Development – Built reusable components:

     CharacterCard (hover glow, house color, favorite toggle)

     CharacterList (grid layout, loading, error handling)

     SortingQuiz (animated question transitions)

     Favorites (dark gray text for readability, house-themed color coding)

4. API Integration – HP API to dynamically fetch character data per house

5. Styling & Theming – Hogwarts colors, fonts, hover animations, Framer Motion effects

6. Testing & Deployment – Tested all pages locally; ready for GitHub Pages deployment

## Usage Instructions:

1. git clone https://github.com/Garrnete/ReactWebApplicationProject

2. Install dependencies: 
      npm install

3. Run the development server:
      npm run dev

4. Open in browser: http://localhost:5173

5. Steps in-app:
      5a. Take the Sorting Hat quiz
      5b. Explore your house dashboard
      5c. Browse house characters
      5d. Add favorites and view them on the Favorites page

## Project Structure
```
src
├── assets               
├── components
│   ├── Background.jsx
│   ├── CharacterCard.jsx
│   ├── CharacterList.jsx
│   ├── Favorites.jsx
│   ├── Header.jsx
│   ├── HouseDashboard.jsx  
│   ├── SearchBar.jsx
│   └── SortingQuiz.jsx
├── redux
│   ├── charactersSlice.js
│   ├── favoritesSlice.js
│   ├── houseSlice.js
│   └── store.js
├── pages
│   └── Favorites.jsx
│   ├── Home.jsx
│   ├── House.jsx
│   └── Sorting.jsx
├── utilities
│   └── houseColors.js
├── App.jsx
└── index.css
```
## API

HP API: https://hp-api.onrender.com/api/characters/house/{house}

Returns an array of character objects for Gryffindor, Slytherin, Ravenclaw, and Hufflepuff

Example:
   [
  {
    "name": "Harry Potter",
    "house": "Gryffindor",
    "image": "https://hp-api.onrender.com/images/harry.jpg",
    "species": "human"
  }
]

## Known Issues / Unsolved Problems:

1. Some characters from the API may lack images (placeholder used)

2. Optional drag-and-drop or carousel features not implemented

## Credits:

HP API – Character data

Fonts: Cinzel & Galindo – Google Fonts

Inspiration: Harry Potter books & movies