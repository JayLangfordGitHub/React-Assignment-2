import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MovieListPageTemplate from "../templateMovieListPage";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};

const ActorDetails = ({ actors }) => {
  console.log("credits", actors.movie_credits.cast);
  return (
    <>
      <Typography variant="h5" component="h3">
        {actors.name}
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>
      <MovieListPageTemplate
        title={actors.name}
        movies={actors.movie_credits.cast}
        action={(movie) => {
          return null;
        }
      }
      />
      
    </>
  );
};
export default ActorDetails;