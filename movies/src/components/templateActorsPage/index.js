import React from "react";
import Grid from "@mui/material/Grid";
import { getActorImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'
import ActorHeader from "../actorHeader";

const TemplateActorsPage = ({ actors, children }) => {
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: actors.id }],
    getActorImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.profiles

  return (
    <>
      <ActorHeader actors={actors} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
        {images.length > 0 && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${images[0].file_path}`}
            alt={images[0].poster_path}
            style={{ width: "100%", height: "auto" }}
          />
        )}
        </Grid>
          <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorsPage;