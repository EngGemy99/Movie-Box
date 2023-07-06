import { Badge, Grid } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import SinglePage from "../Component/SinglePage";
import { axiosInstance } from "../config/axiosConfig";
function Search() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  const handleSearch = () => {
    axiosInstance
      .get(`search//movie?&query=${search}&page=1&include_adult=false`)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <input
            type="text"
            className="form-control"
            onBlur={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2 mt-4 mt-md-0">
          <button
            className="btn btn-primary w-100"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        <Grid container spacing={2} className="mt-5">
          {movie.length > 0 &&
            movie.map((item) => {
              return <SinglePage item={item} type="movie" key={item.id} />;
            })}
        </Grid>
      </div>
    </div>
  );
}

export default Search;
