import "./ModalCarrito.css";
import imgPequeña from "../../../public/images/image-product-1-thumbnail.jpg";
import iconClose from "../../../public/images/icon-close.svg";

const ModalCarrito = ({isOpen2, closeModal2}) => {

  if (!isOpen2) return null;

  return(
    <div className={`container__modalCarrito ${isOpen2 ? "open" : ""}`}>
      <img className="iconClose" onClick={closeModal2} src={iconClose}/>
      <h2>Cart</h2>
      <hr />
      <div className="container__contenido">
        <img className="img" src={imgPequeña}/>
        <div className="container__contenido--texto">
          <p>Fail Limited Edition Sneakers</p>
          <p>$125.oo x 3 <span>$375.00</span></p>
        </div>
      </div>
      <button>Checkout</button>
    </div>
  )
}

export default ModalCarrito;