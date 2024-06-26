import Navbar from "../componenst/navbar/Navbar";
import "../styles/Collections.css";
import imgPrincipal from "../../public/images/image-product-1.jpg";
import imgPequeña1 from "../../public/images/image-product-1-thumbnail.jpg";
import imgPequeña2 from "../../public/images/image-product-2-thumbnail.jpg";
import imgPequeña3 from "../../public/images/image-product-3-thumbnail.jpg";
import imgPequeña4 from "../../public/images/image-product-4-thumbnail.jpg";
import iconNext from "../../public/images/icon-next.svg";
import iconPrevius from "../../public/images/icon-previous.svg";
import iconResta from "../.././public/images/icon-minus.svg"
import iconSuma from "../../public/images/icon-plus.svg";
import iconCart from "../../public/images/icon-cart.svg";
import iconClose from "../../public/images/icon-close.svg"
import { useState } from "react";
import ModalSlider from "../componenst/modal/ModalSlider";

const Collections = () => {

  const [cantidad, setCantidad] = useState(0);

  function handleClickResta() {
    setCantidad(cantidad - 1)
  }
  

  function handleClickSuma() {
    setCantidad(cantidad + 1)
  }


  const [estaAbierto, setEstaAbierto] = useState(false);
  const [modalAbierta, setModalAbierta] = useState(false);


  return(
    <div className="container__collections">
      <Navbar />
      <hr />
      <main>
        {/* Seccion Imagenes */}
        <section className="section__img">
          <article className="img__principal">
            <img className="icon__slider icon__next" src={iconNext}/>
            <img onClick={() => setModalAbierta(!modalAbierta)} src={imgPrincipal}/>
            <img className="icon__slider icon__previous" src={iconPrevius}/>
          </article>
          <article className="img__pequeñas">
            <img onClick={() => setModalAbierta(!modalAbierta)} src={imgPequeña1}/>
            <img  onClick={() => setModalAbierta(!modalAbierta)} src={imgPequeña2}/>
            <img  onClick={() => setModalAbierta(!modalAbierta)} src={imgPequeña3}/>
            <img  onClick={() => setModalAbierta(!modalAbierta)} src={imgPequeña4}/>
          </article>
        </section>
        {/* Seccion Texto */}
        <section className="section__texto">
          <h2> Sneaker Company</h2>
          <h1> Fall Limited Edition<br /> Sneakers</h1>
          <p className="section__texto--description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
             durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className="section__texto--price">
            <h3>$125.00<span> 50%</span></h3>
            <h4> $250.00</h4>
          </div>
          <div className="section__texto--addCard">
            <button className="btn btn__cantidad">
              <img onClick={handleClickResta} src={iconResta}/>
              <p>{cantidad}</p>
              <img onClick={handleClickSuma} src={iconSuma}/>
            </button>
            <button className="btn btn__cart">
              <img src={iconCart}/>
              Add to Cart
            </button>
          </div>
        </section>
        {/* Modal Slider Imagenes */}
        {/*<section className={`container__modal ${isOpen ? "open" : ""}`}>
          <div className="container__modal--imgGrande">
            <img onClick={() => setIsOpen(!isOpen)} className="icon__close"  src={iconClose} alt="Icono Close"/>
            <img className="imgGrande" src={imgPrincipal} alt="Imagen grande"/>
            <img className="icon__previus" src={iconPrevius} alt="Icono Previo"/>
           <img className="icon__next" src={iconNext} alt="Icono Next"/>
         </div>
        <div className="container__modal--imgPequeña">
          <img src={imgPequeña1} alt="Imagen Pequeña"/>
          <img src={imgPequeña2} alt="Imagen Pequeña"/>
          <img src={imgPequeña3} alt="Imagen Pequeña"/>
          <img src={imgPequeña4} alt="Imagen Pequeña"/>
        </div>
      </section>*/}
      <ModalSlider estaAbierto={modalAbierta} modalCerrada={() => setModalAbierta(false)}/>
      </main>
    </div>
  )
}

export default Collections;