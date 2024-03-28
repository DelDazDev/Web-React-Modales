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
import { useState } from "react";

const Collections = () => {

  const [cantidad, setCantidad] = useState(0);

  function handleClickResta() {
    setCantidad(cantidad - 1)
  }
  

  function handleClickSuma() {
    setCantidad(cantidad + 1)
  }

  return(
    <div className="container__collections">
      <Navbar />
      <hr />
      <main>
        <section className="section__img">
          <article className="img__principal">
            <img className="icon__slider icon__next" src={iconNext}/>
            <img className="icon__slider icon__previous" src={iconPrevius}/>
            <img src={imgPrincipal}/>
          </article>
          <article className="img__pequeñas">
            <img src={imgPequeña1}/>
            <img src={imgPequeña2}/>
            <img src={imgPequeña3}/>
            <img src={imgPequeña4}/>
          </article>
        </section>
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
      </main>
    </div>
  )
}

export default Collections;