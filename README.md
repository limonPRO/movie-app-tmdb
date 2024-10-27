# Movie Search and Details App

## Overview

This project is a responsive movie search and details application built using [Next.js](https://nextjs.org/) (version 13/14) and the [TMDB API](https://developers.themoviedb.org/3). The app features infinite scrolling or a "Load More" button on the homepage, movie details pages, and a favorites/watchlist feature.

## Features

### Homepage
- **Movie List with Infinite Scrolling/Load More**: 
  - Displays a list of popular movies fetched from the TMDB API.
  - Implements infinite scrolling or a "Load More" button for fetching and displaying more movies dynamically.
  - Movies are fetched in pages (20 movies per API request) using client-side rendering.
  - Lazy-loads movie posters for optimized performance.

- **Search Bar**: 
  - Allows users to search for movies by title using the TMDB search API.
  - Displays search results with the same infinite scroll or Load More behavior.

### Movie Details Page
- **Dynamic Route for Movie Details**: 
  - Navigates to a dynamic route when a movie is selected from the homepage.
  - Fetches detailed information about the movie using the TMDB movie details API.
  - Uses Server-Side Rendering (SSR) with Incremental Static Regeneration (ISR) to keep the data fresh.

- **Display Information**: 
  - Shows the movie poster, full description, genres, release date, and cast.
  - Displays related movie recommendations with periodic revalidation.

### Favorites/Watchlist
- **Add to Favorites/Watchlist**: 
  - Users can add or remove movies from a favorites/watchlist.
  - Stores the watchlist using Server Actions .

- **Watchlist Page**: 
  - Displays all movies the user has added to their watchlist.
  - Allows users to remove movies from the watchlist.

### Optional Features
- **Dark Mode Toggle**: 
  - Implements a dark mode toggle that persists user preferences using cookies or localStorage.


- **Auth**: 
  - google login and make protected route using middile ware .
  - 
- **Global State Management**: 
  - Uses React Context or Zustand for managing global settings like dark mode and watchlist status.

## Extra Credit Features
- **API Response Validation**: 
  - Uses [Zod](https://zod.dev/) to validate API responses from TMDB.

- **Optimistic UI**: 
  - Implements an  for adding/removing movies from the watchlist.

- **Dynamic Caching**: 
  - Uses Next.js Dynamic Caching to improve performance with API calls.

## Getting Started

### Prerequisites
- Node.js (version 14.x or higher)
- npm or yarn

### Installation
1. Clone the repository: go to the directory and make .env file in the root copy everything fill up with your value
  - NEXT_PUBLIC_BASE_URL=
  - API_URL=
  - API_KEY=
  - ACCESS_TOKEN=
  - GOOGLE_CLIENT_ID=
  - GOOGLE_CLIENT_SECRET=
  - AUTH_SECRET=


### run the command
  
   ```bash
    -npm run i
   - npm run dev

