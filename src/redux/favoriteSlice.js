import { createSlice } from "@reduxjs/toolkit";

const loadFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem("favorites");
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const INITIAL_STATE = {
  favorites: loadFavoritesFromLocalStorage(),
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    addToFavorites: (state, action) => {
      const newFavorites = [...state.favorites, action.payload];
      state.favorites = newFavorites;
      saveFavoritesToLocalStorage(newFavorites);
    },
    removeFromFavorites: (state, action) => {
      const newFavorites = state.favorites.filter(
        (fav) => fav._id !== action.payload
      );
      state.favorites = newFavorites;
      saveFavoritesToLocalStorage(newFavorites);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
export const selectFavorites = (state) => state.favorite.favorites;
