import React, { useContext, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { Pagination } from "@mui/material";

const FavoriteMoviesPage = () => {
  const {favorites: movieIds } = useContext(MoviesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 10;

  const startIndex = (currentPage - 1) * moviesPerPage;
  const paginatedMovieIds = movieIds.slice(startIndex, startIndex + moviesPerPage);

  const favoriteMovieQueries = useQueries(
    paginatedMovieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }],
        queryFn: getMovie,
      };
    })
  );

  const isLoading = favoriteMovieQueries.some((query) => query.isLoading);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <>
      <PageTemplate
        title="Favorite Movies"
        movies={movies}
        action={(movie) => (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        )}
      />
      <Pagination
        count={Math.ceil(movieIds.length / moviesPerPage)}
        page={currentPage}
        onChange={(event, page) => setCurrentPage(page)}
        style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }}
      />
    </>
  );
};

export default FavoriteMoviesPage;
