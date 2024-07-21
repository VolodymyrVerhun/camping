import { Link } from "react-router-dom";
import style from "./Header.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
    </header>
  );
}
