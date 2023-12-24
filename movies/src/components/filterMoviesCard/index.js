import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "white"
};

export default function FilterMoviesCard(props) {
  const handleTextChange = (e) => {
    props.onUserInput("name", e.target.value);
  };

  const handleGenreChange = (e) => {
    props.onUserInput("genre", e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#424242" }}>
      <CardContent>
        <Typography variant="h5" component="h1" sx={{ color: 'white' }}>
          <SearchIcon fontSize="large" sx={{ color: 'white' }} />
          Filter the movies.
        </Typography>
        <TextField
          sx={formControl}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={formControl}>
          <InputLabel id="genre-label" sx={{ color: 'black' }}>Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            <MenuItem value={0}>All</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
    </Card>
  );
}