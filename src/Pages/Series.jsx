import { useState } from "react";
import CustomPagination from "../Component/CustomPagination";
import CustomHooks from "../hooks/CustomHooks";
import SinglePage from "../Component/SinglePage";
import { Grid } from "@material-ui/core";

const Series = () => {
  const [page, setPage] = useState(1);

  const current = localStorage.getItem("NumberPageSeries");
  const { content: SeriesContent, numOfPages } = CustomHooks(
    `https://api.themoviedb.org/3/discover/tv?api_key=97cd0ab3fd3e22a15f551b94745e328a&page=${current}`,
    page
  );
  window.onbeforeunload = function () {
    // localStorage.clear();
  };

  return (
    <div className="Series container">
      <Grid container spacing={2}>
        {SeriesContent.length > 0 ? (
          SeriesContent.map((item) => {
            return <SinglePage item={item} type="tv" key={item.id} />;
          })
        ) : (
          <p>No Items To Move</p>
        )}
      </Grid>
      <CustomPagination
        setPage={setPage}
        type="NumberPageSeries"
        numOfPages={numOfPages}
      />
    </div>
  );
};

export default Series;
