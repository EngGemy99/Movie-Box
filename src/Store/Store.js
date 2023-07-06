import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "./Slice/FavoriteMovie";
export default configureStore({
  reducer: {
    favoriteMovie: favoriteSlice,
  },
});
