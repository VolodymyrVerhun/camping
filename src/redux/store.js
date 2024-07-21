import { campReducer } from "./campSlice";
import { favoriteReducer } from "./favoriteSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  camp: campReducer,
  favorite: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
