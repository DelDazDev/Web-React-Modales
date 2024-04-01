import {NavLink} from "react-router-dom"
import {useState} from "react";
import "./Navbar.css";
import imgLogo from "../../../public/images/logo.svg";
import imgOpenMenu from "../../../public/images/icon-menu.svg";
import imgCloseMenu from "../../../public/images/icon-close.svg"
import imgCarrito from "../../../public/images/icon-cart.svg"
import imgAvatar from "../../../public/images/image-avatar.png"
import Modal from "../../componenst/modal/Modal";
import ModalCarrito from "../modal/ModalCarrito";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalIsOpen2, setModalIsOpen2] = useState(false)

  return(
    <div className="container__menu">
      <header>
        <div className="container__iconMenu">
          {
            isOpen
              ?<img onClick={() => setIsOpen(!isOpen)}  className="iconCloseMenu" src={imgCloseMenu}/>
              :<img onClick={() => setIsOpen(!isOpen)} className="iconOpenMenu" src={imgOpenMenu}/>
          }
        </div>
        <img src={imgLogo}/>
        <nav className={isOpen ? "open" : ""}>
          <ul>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/">Collections</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/men">Men</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/women">Women</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/about">About</NavLink></li>
            <li><NavLink onClick={() => setIsOpen(!isOpen)} to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
        <div className="iconos__navbar">
          <img onClick={() => setModalIsOpen2(true)}  className="imgCarrito" src={imgCarrito}/>
          <img onClick={() => setModalIsOpen(true)} className="imgAvatar" src={imgAvatar}/>
        </div>
      </header>
      <Modal isOpen={modalIsOpen} closeModal={() => setModalIsOpen(false)}/>
      <ModalCarrito isOpen2={modalIsOpen2} closeModal2={() => setModalIsOpen2(false)}/>
    </div>
  )
}

export default Navbar;