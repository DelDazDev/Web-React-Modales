import "./Modal.css";
import imgClose from "../../../public/images/icon-close.svg";

const Modal = ({ isOpen, closeModal}) => {
  if (!isOpen) return null;

  return(
    <div className={`container__otraModal ${isOpen ? "open" : ""}`}>
      <img className="iconClose" onClick={closeModal} src={imgClose}/>
      <h2>Cart</h2>
      <hr />
      <p>Tu Carrito esta Vacio</p>
    </div>
  )
}

export default Modal;