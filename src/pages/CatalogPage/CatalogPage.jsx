import { useSelector } from "react-redux";
import { selectCamps } from "../../redux/campSlice";

import { Field, Formik, Form } from "formik";
import style from "./CatalogPage.module.css";

import sprite from "../../assets/sprite.svg";
import Button from "../../components/Button/Button";
import CampList from "../../components/CampList/CampList";
export default function CatalogPage() {
  const items = useSelector(selectCamps);
  console.log("items: ", items);

  return (
    <div className={style.catolog}>
      <div className={style.choose_block}>
        <Formik
          initialValues={{
            checked: [],
          }}
        >
          <Form>
            <label className={style.location_title}>
              {/* <svg height="44" width="44">
                <use href={`${sprite}#location`}></use>
              </svg> */}
              Location
            </label>
            <Field
              className={style.input}
              type="text"
              name="Location"
              placeholder=" Lviv, Ukraine"
            />
            <p className={style.filters}>Filters</p>
            <h2 className={style.type} id="checkbox-group">
              Vehicle equipment
            </h2>
            <div
              role="group"
              aria-labelledby="checkbox-group"
              className={style.checkbox_group}
            >
              <button className={style.checkbox} type="button">
                <svg height="44" width="24">
                  <use href={`${sprite}#AC`}></use>
                </svg>
                <span>AC</span>
              </button>
              <button className={style.checkbox} type="button">
                <svg height="44" width="24">
                  <use href={`${sprite}#trans`}></use>
                </svg>
                <span>Automatic</span>
              </button>
              <button className={style.checkbox} type="button">
                <svg height="44" width="24">
                  <use href={`${sprite}#kitchen`}></use>
                </svg>
                <span>Kitchen</span>
              </button>
              <button className={style.checkbox} type="button">
                <svg height="44" width="28">
                  <use href={`${sprite}#TV`}></use>
                </svg>
                <span>TV</span>
              </button>
              <button className={style.checkbox} type="button">
                <svg height="44" width="24">
                  <use className={style.use} href={`${sprite}#shover`}></use>
                </svg>{" "}
                <span>Shower/WC</span>
              </button>
            </div>
            <div className={style.type} id="checkbox-group">
              Vehicle type
            </div>
            <div
              role="group"
              aria-labelledby="checkbox-group"
              className={style.checkbox_group}
            >
              <button className={style.checkbox} type="button">
                <svg height="44" width="44">
                  <use href={`${sprite}#van`}></use>
                </svg>
                VAN
              </button>
              <button className={style.checkbox} type="button">
                <svg height="44" width="44">
                  <use href={`${sprite}#ful_van`}></use>
                </svg>
                Fully Integrated
              </button>
              <button className={style.checkbox} type="button">
                <svg height="44" width="44">
                  <use href={`${sprite}#alvoce`}></use>
                </svg>{" "}
                Alvoce
              </button>
            </div>

            <Button>Search</Button>
          </Form>
        </Formik>
      </div>
      <CampList items={items} />
    </div>
  );
}
