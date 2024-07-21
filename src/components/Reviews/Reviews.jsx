import ModalForm from "../ModalForm/ModalForm";
import style from "./Reviews.module.css";

export default function Reviews({ camp }) {
  return (
    <div className={style.features_block}>
      <div className={style.reviews}>
        <ul className={style.camp_details_ul}>
          {camp.reviews.map((coment) => (
            <div key={coment.reviewer_name[0]}>
              <div className={style.name_block}>
                <h1 className={style.first_letter}>
                  {coment.reviewer_name[0]}
                </h1>
                <div>
                  <h2 className={style.reviewer_name}>
                    {coment.reviewer_name}
                  </h2>
                  <span>rating</span>
                </div>
              </div>

              <p className={style.reviewer_comment}>{coment.comment}</p>
            </div>
          ))}
        </ul>
      </div>
      <div className={style.form}>
        <ModalForm />
      </div>
    </div>
  );
}
