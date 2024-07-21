import Modal from "react-modal";
import style from "./ModalWrapper.module.css";
export default function ModalWrapper({ isOpen, onClose, children }) {
  const customStyles = {
    content: {
      top,
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "40px",
      borderRadius: "15px",
      maxHeight: "95vh",
      overflow: "auto",
    },
    overlay: {
      backgroundColor: "rgba(47, 47, 47, 0.6)",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      className={style.modal}
      ariaHideApp={false}
      onRequestClose={() => onClose()}
    >
      <button onClick={() => onClose()} className={style.close_btn}>
        X
      </button>

      {children}
    </Modal>
  );
}
