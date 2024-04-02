import "./ModalSlider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import iconClose from "../../../public/images/icon-close.svg"
import imgGrande1 from "../../../public/images/image-product-1.jpg"
import imgPequeña1 from "../../../public/images/image-product-1-thumbnail.jpg"
import imgPequeña2 from "../../../public/images/image-product-2-thumbnail.jpg"
import imgPequeña3 from "../../../public/images/image-product-3-thumbnail.jpg"
import imgPequeña4 from "../../../public/images/image-product-4-thumbnail.jpg"
import {useState} from "react"

const ModalSlider = ({estaAbierto, modalCerrada, data}) => {
  if(!estaAbierto) return null;

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1)
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1 )
  }


  return(
    <div className="carousel">
      <img className="icon__close" onClick={modalCerrada} src={iconClose}/>
      <BsArrowLeftCircleFill className="icon icon__der" onClick={prevSlide} />
        <img src={imgGrande1}  className={slide === 0 ? "slide" : "slide slide-hidden"}/>
      <BsArrowRightCircleFill className="icon icon__izq" onClick={nextSlide}/>
      <div className="container__modalesPequeñas">
        <img  onClick={() => setSlide()} src={imgPequeña1} className={slide === 0 ? "indicator" : "indicator indicator-inactive"}/>
        <img  onClick={() => setSlide()} src={imgPequeña2} className={slide === 0 ? "indicator" : "indicator indicator-inactive"}/>
        <img  onClick={() => setSlide()} src={imgPequeña3} className={slide === 0 ? "indicator" : "indicator indicator-inactive"} />
        <img  onClick={() => setSlide()} src={imgPequeña4} className={slide === 0 ? "indicator" : "indicator indicator-inactive"}/>
      </div>
    </div>
  )
}

export default ModalSlider;