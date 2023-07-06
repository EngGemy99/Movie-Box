import { useState } from "react";
import CustomPagination from "../Component/CustomPagination";
import CustomHooks from "../hooks/CustomHooks";
import "./GeneralStyle/style.css";
import SinglePage from "../Component/SinglePage";
import { Grid } from "@material-ui/core";
import Language from "../Context/Language";
import { useContext } from "react";

const Movie = () => {
  const [page, setPage] = useState(1);
  const { lang, setLang } = useContext(Language);
  const current = localStorage.getItem("NumberPageMovie");
  const { content: Movies, numOfPages } = CustomHooks(
    `https://api.themoviedb.org/3/discover/movie?api_key=97cd0ab3fd3e22a15f551b94745e328a&language=${lang}&page=${current}`,
    page
  );
  //?executed when the user navigates away from the current page or closes the browser window.
  //? === clean up
  window.onbeforeunload = function () {
    // localStorage.clear();
  };

  return (
    <>
      <div className="Movie container">
        <Grid container spacing={2}>
          {Movies.length > 0 ? (
            Movies.map((item) => {
              return <SinglePage item={item} type="movie" key={item.id} />;
            })
          ) : (
            <p>No Items To Move</p>
          )}
        </Grid>
        <CustomPagination
          setPage={setPage}
          type="NumberPageMovie"
          numOfPages={numOfPages}
        />
      </div>
      )
    </>
  );
};

export default Movie;
