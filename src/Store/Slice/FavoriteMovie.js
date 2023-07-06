import { createSlice } from "@reduxjs/toolkit";
const favoriteList = localStorage.getItem("favoriteList")
  ? JSON.parse(localStorage.getItem("favoriteList"))
  : [];
const INITIAL_STATE = {
  favoriteList: favoriteList,
};
const favoriteSlice = createSlice({
  name: "favoriteMovies",
  initialState: INITIAL_STATE,
  reducers: {
    addMovie(state, action) {
      console.log("work");
      state.favoriteList.push(action.payload);
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },
    removeMovie(state, action) {
      state.favoriteList = state.favoriteList.filter(
        (obj) => obj.id !== action.payload
      );
      localStorage.setItem("favoriteList", JSON.stringify(state.favoriteList));
    },
  },
});

export const { addMovie, removeMovie } = favoriteSlice.actions;
export default favoriteSlice.reducer;
