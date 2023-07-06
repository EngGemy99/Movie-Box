import { Badge, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { img_500, unavailable } from "../config";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../Store/Slice/FavoriteMovie";
function Favorite() {
  const favoriteList = useSelector((state) => state.favoriteMovie.favoriteList);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <Grid container spacing={2}>
        {favoriteList.length > 0 ? (
          favoriteList.map((item, index) => {
            return (
              <Grid
                item
                key={index}
                lg={3}
                md={6}
                xs={12}
                style={{
                  position: "relative",
                }}
              >
                <i
                  class="fa-sharp fa-solid fa-trash text-danger"
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    zIndex: "2",
                    top: " 15px",
                    left: " 15px",
                    fontSize: " 24px",
                  }}
                  onClick={() => {
                    dispatch(removeMovie(item.id));
                  }}
                ></i>
                <Badge
                  color={item.vote_average > 6 ? "primary" : "secondary"}
                  badgeContent={item.vote_average.toFixed(1)}
                >
                  <div className="position-relative">
                    <img
                      src={
                        item.poster_path
                          ? img_500 + item.poster_path
                          : unavailable
                      }
                      className="w-100"
                      alt={item.title}
                    />
                  </div>
                </Badge>
              </Grid>
            );
          })
        ) : (
          <p>No favorite Movie</p>
        )}
      </Grid>
    </div>
  );
}

export default Favorite;
