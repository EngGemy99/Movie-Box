import { Badge, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { img_500, unavailable } from "../../config/index";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../../Store/Slice/FavoriteMovie";
const SinglePage = ({ item, type }) => {
  const [like, setLike] = useState(false);
  const favoriteList = useSelector((state) => state.favoriteMovie.favoriteList);
  const dispatch = useDispatch();
  return (
    <Grid
      item
      lg={3}
      md={6}
      xs={12}
      style={{
        position: "relative",
      }}
    >
      {like || favoriteList.find((favorite) => favorite.id === item.id) ? (
        <i
          className="fa-solid fa-heart text-danger"
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
            setLike(!like);
          }}
        ></i>
      ) : (
        <i
          className="fa-regular fa-heart text-danger"
          style={{
            cursor: "pointer",
            position: "absolute",
            zIndex: "2",
            top: " 15px",
            left: " 15px",
            fontSize: " 24px",
          }}
          onClick={() => {
            dispatch(addMovie(item));
            setLike(!like);
          }}
        ></i>
      )}

      <Badge
        color={item.vote_average > 6 ? "primary" : "secondary"}
        badgeContent={item.vote_average.toFixed(1)}
      >
        <NavLink to={`/Boxing/${type}/${item.id}`}>
          <div className="position-relative">
            <img
              src={item.poster_path ? img_500 + item.poster_path : unavailable}
              className="w-100"
              alt={item.title}
            />
          </div>
        </NavLink>
      </Badge>
    </Grid>
  );
};

export default SinglePage;
