import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favoriteSlice";
// import Camp from "../../components/Camp/Camp";
import CampList from "../../components/CampList/CampList";

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  console.log("favorites: ", favorites);
  return (
    <div>
      <CampList items={favorites} />
    </div>
  );
}
