# Assignment 2 - Web API

Name: Jay Langford

## Features

Additional features implemented in the API that were not in the labs:

+ Custom Routing: Implemented complex routing logic using React Router.
+ React Query Integration: Utilized React Query for state management and data fetching.
+ Advanced Authentication: Set up an advanced authentication system using context providers.
+ Enhanced Movie Data Display: Added pages for upcoming movies, latest movies, login, sign up, favourites, watch list, actors, and actor details.
+ Protected Routes: Integrated protected routes that require user authentication for favuorites and watch list.
+ Dynamic Review Posting: Implemented functionality to add movie reviews.

## Setup Requirements

Clone the repository and run `npm install` to install dependencies.
Run 'mongod' in the movies-api directory.
Run 'npm start' in the movies-api and movies directories. 

## API Configuration

Movies .env file:

REACT_APP_TMDB_KEY=a8bd3684f88d5cf715f867326985d99f

Movies-api .env file:

NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb+srv://20098918:ULLARS5r5@movies.6mzskyl.mongodb.net/movies?retryWrites=true&w=majority
REACT_APP_TMDB_KEY=a8bd3684f88d5cf715f867326985d99f
SECRET=ilikecake

## API Design

Detailed description of the API endpoints:

- **GET /api/movies**
  - Retrieves a list of movies.

- **GET /api/movies/{movieid}**
  - Fetches details of a single movie by its ID.

- **GET /api/movies/tmdb/genres**
  - Gets a list of movie genres from TMDB.

- **GET /api/movies/tmdb/upcoming**
  - Retrieves a list of upcoming movies from TMDB.

- **GET /api/movies/tmdb/latest**
  - Fetches a list of the latest movies from TMDB.

- **GET /api/actors**
  - Retrieves a list of actors.

- **GET /api/actors/{actorid}**
  - Fetches details of a single actor by their ID.

- **GET /api/users**
  - Retrieves a list of users.

- **POST /api/users**
  - Creates a new user account.

- **PUT /api/users/{userid}**
  - Updates an existing user's details.

- **POST /api/users/{username}/favorites/{movieid}**
  - Adds a movie to a user's favorites.

- **GET /api/users/{username}/favorites**
  - Retrieves a user's favorite movies.

## Security and Authentication

Implemented JWT based authentication. Protected routes are only accessible to authenticated users. This includes routes like `/movies/favorites` and `/movies/playlist`.

## Integrating with React App

The React app is integrated with the API for data fetching and state management. Some pages were changed from the first assignment and some were removed to suit the rubric. The following views use the Web API:

- Actors Page
- Actor Details Page
- Favorite Movies Page (Protected)
- Watch List Movies Page (Protected)
- Log In Page
- Sign Up page

The TMDB API has been replaced with custom API calls in these views.
