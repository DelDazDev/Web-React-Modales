import {NavLink} from "react-router-dom"
import {useState} from "react";
import "./Navbar.css";
import imgLogo from "../../../public/images/logo.svg";
import imgOpenMenu from "../../../public/images/icon-menu.svg";
import imgCloseMenu from "../../../public/images/icon-close.svg"
import imgCarrito from "../../../public/images/icon-cart.svg"
import imgAvatar from "../../../public/images/image-avatar.png"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

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
          <img className="imgCarrito" src={imgCarrito}/>
          <img className="imgAvatar" src={imgAvatar}/>
        </div>
      </header>
    </div>
  )
}

export default Navbar;