import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";

import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Header from "./components/Header/Header.jsx";
import { useEffect } from "react";
import { fetchCamp } from "./redux/campOps.js";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamp());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
