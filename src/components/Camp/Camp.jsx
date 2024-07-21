import style from "./Camp.module.css";
import ModalWrapper from "../../components/ModalWrapper/ModalWrapper";
import { useState } from "react";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import Button from "../Button/Button";
import sprite from "../../assets/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "../../redux/favoriteSlice";

export default function Camp({ item }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((fav) => fav._id === item._id);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    if (isFavorite) {
      dispatch(removeFromFavorites(item._id));
    } else {
      dispatch(addToFavorites(item));
    }
  };
  return (
    <li className={style.li}>
      <div className={style.img_block}>
        <img className={style.img} src={item.gallery[0]} alt="camp" />
      </div>
      <div className={style.content}>
        <div className={style.header}>
          <h1 className={style.name_camp}>{item.name}</h1>
          <div>
            <span className={style.price_item}>€{item.price}</span>
            <button className={style.heart_btn} onClick={handleFavoriteClick}>
              {isFavorite ? (
                <svg height="22" width="26">
                  <use href={`${sprite}#heart-active`}></use>
                </svg>
              ) : (
                <svg height="22" width="26">
                  <use href={`${sprite}#heart`}></use>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className={style.subHeader}>
          <span className={style.rating_reviews}>
            {item.rating} ({item.reviews.length} Reviews)
          </span>
          <span>
            <svg height="20" width="22">
              <use href={`${sprite}#location`}></use>
            </svg>
            {item.location}
          </span>
        </div>
        <p className={style.description}>{item.description}</p>
        <ul className={style.details}>
          <li className={style.details_params}>
            <svg height="14" width="28">
              <use href={`${sprite}#adult`}></use>
            </svg>
            {item.adults} adults
          </li>
          <li className={style.details_params}>
            <svg height="17" width="28">
              <use href={`${sprite}#trans`}></use>
            </svg>
            {item.transmission}
          </li>
          <li className={style.details_params}>
            <svg height="16" width="28">
              <use href={`${sprite}#petrol`}></use>
            </svg>
            {item.engine}
          </li>
          <li className={style.details_params}>
            <svg height="16" width="28">
              <use href={`${sprite}#kitchen`}></use>
            </svg>
            Kitchen
          </li>
          <li className={style.details_params}>
            <svg height="16" width="28">
              <use href={`${sprite}#bed`}></use>
            </svg>
            {item.details.beds} beds
          </li>
          <li className={style.details_params}>
            {" "}
            <svg height="16" width="28">
              <use href={`${sprite}#AC`}></use>
            </svg>
            AC
          </li>
        </ul>
        <Button onClick={() => setModalIsOpen(true)}>Show more</Button>
        <ModalWrapper
          isOpen={modalIsOpen}
          onClose={() => {
            setModalIsOpen(false);
          }}
        >
          <h2 className={style.name_camp}>{item.name}</h2>
          <span className={style.rating}>
            {item.rating} ({item.reviews.length} Reviews)
          </span>
          <span className={style.location}>{item.location}</span>
          <p className={style.price}>€{item.price}</p>
          <ul className={style.modal_ul}>
            {item.gallery.map((image, index) => (
              <li key={index} className={style.modal_li_img}>
                <img className={style.img} src={image} alt={`camp ${index}`} />
              </li>
            ))}
          </ul>
          <p className={style.description_modal}>{item.description}</p>
          <div className={style.tab_group}>
            <button
              className={style.tab}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={style.tab}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>
          {activeTab === "features" && <Features camp={item} />}
          {activeTab === "reviews" && <Reviews camp={item} />}
        </ModalWrapper>
      </div>
    </li>
  );
}
