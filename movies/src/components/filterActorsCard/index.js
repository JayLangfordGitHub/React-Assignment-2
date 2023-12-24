import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "white"
};

const FilterActorsCard = (props) => {
  const handleTextChange = (e) => {
    props.onUserInput("name", e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#424242" }}>
      <CardContent>
        <Typography variant="h5" component="h1" sx={{ color: 'white' }}>
          <SearchIcon fontSize="large" sx={{ color: 'white' }} />
          Search the actors.
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
      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
    </Card>
  );
};

export default FilterActorsCard;