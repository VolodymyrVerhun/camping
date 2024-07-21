import ModalForm from "../ModalForm/ModalForm";
import sprite from "../../assets/sprite.svg";
import style from "./Features.module.css";
export default function Features({ camp }) {
  return (
    <div className={style.features_block}>
      <div className={style.type}>
        <ul className={style.camp_details_ul}>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#adult`}></use>
            </svg>
            {camp.adults} adults
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#trans`}></use>
            </svg>
            {camp.transmission}
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#AC`}></use>
            </svg>
            AC
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#petrol`}></use>
            </svg>
            {camp.engine}
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#kitchen`}></use>
            </svg>
            Kitchen
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#bed`}></use>
            </svg>
            {camp.details.beds} beds
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#conduk`}></use>
            </svg>
            {camp.details.airConditioner} air conditioner
          </li>
          <li className={style.camp_details}>
            <svg height="18" width="28">
              <use href={`${sprite}#CD`}></use>
            </svg>
            CD
          </li>
          <li className={style.camp_details}>
            <svg height="18" width="28">
              <use href={`${sprite}#radio`}></use>
            </svg>
            Radio
          </li>
          <li className={style.camp_details}>
            <svg height="16" width="28">
              <use href={`${sprite}#hob`}></use>
            </svg>
            {camp.details.hob} hob
          </li>
        </ul>
        <h2 className={style.camp_details_title}>Vehicle details</h2>
        <ul>
          <li className={style.camp_details_li}>
            <span>Form</span> <span>{camp.form}</span>
          </li>
          <li className={style.camp_details_li}>
            <span>Length</span> <span>{camp.length}</span>
          </li>
          <li className={style.camp_details_li}>
            <span>Width</span> <span>{camp.width}</span>
          </li>
          <li className={style.camp_details_li}>
            <span>Height</span> <span>{camp.height}</span>
          </li>
          <li className={style.camp_details_li}>
            <span>Tank</span> <span>{camp.tank}</span>
          </li>
          <li className={style.camp_details_li}>
            <span>Consumption</span> <span>{camp.consumption}</span>
          </li>
        </ul>
      </div>
      <div className={style.form}>
        <ModalForm />
      </div>
    </div>
  );
}
