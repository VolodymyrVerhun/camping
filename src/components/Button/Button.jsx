import style from "./Button.module.css";

export default function Button({ onClick, children, style: customStyle }) {
  return (
    <button onClick={onClick} className={style.btn} style={customStyle}>
      {children}
    </button>
  );
}
