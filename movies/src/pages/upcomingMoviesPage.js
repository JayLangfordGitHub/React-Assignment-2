import React, {useState} from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getUpcomingMovies } from '../api/tmdb-api';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner'
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch'
import { Pagination } from "@mui/material";
/* eslint-disable no-unused-vars */

const UpcomingMoviesPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError, refetch }  = useQuery(['upcoming',{ page: currentPage}], getUpcomingMovies)

  if (isLoading) {
  return <Spinner />
  }

  if (isError) {
   return <h1>{error.message}</h1>
  }

  const movies = data.results;
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    refetch({ currentPage });
  };

  return (
    <>
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
    <Pagination style={{ marginTop: '25px', display: 'flex', justifyContent: 'center' }} count={data.total_pages} color="secondary" onChange={handlePageChange} page={currentPage} size="large"/>
    </>
  );
};

export default UpcomingMoviesPage;