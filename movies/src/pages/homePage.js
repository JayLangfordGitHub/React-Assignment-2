import React, {useState} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { Pagination } from "@mui/material";


const HomePage = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError, refetch }  = useQuery(['discover',{ page: currentPage}], getMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    refetch({ currentPage });
  };

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  

  return (
    <>
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
    {/* count manually here as API has a limit of 500 pages */}
    <Pagination style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }} count={500} color="secondary" onChange={handlePageChange} page={currentPage} size="large"/>
    </>
  );
};

export default HomePage;