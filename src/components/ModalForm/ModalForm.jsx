import { Field, Formik, Form } from "formik";

import style from "./ModalForm.module.css";
import Button from "../Button/Button";
export default function ModalForm() {
  return (
    <div>
      <h2 className={style.title}>Book your campervan now</h2>
      <p className={style.p}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik>
        <Form>
          <Field
            className={style.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <Field
            className={style.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <Field
            className={style.input}
            type="date"
            name="date"
            placeholder="Booking date"
          />
          <Field
            className={style.input}
            type="text"
            name="comment"
            placeholder="Comment"
          />
          <Button type="submit">Send</Button>
        </Form>
      </Formik>
    </div>
  );
}
