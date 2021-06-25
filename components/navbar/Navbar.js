import Link from "next/link";
import {faBars, faShoppingCart, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

export default function Navbar (){
    //for toggling menu bars with "x" icon
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-bars-container" onClick={handleClick}>
                        <FontAwesomeIcon className="menu-bars-icon"
                                         icon={click ? faTimes : faBars} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <p className="nav-link">Stores</p>
                        </li>
                        <li className="nav-item">
                            <p className="nav-link">Contact Us</p>
                        </li>
                    </ul>
                    <Link href="/">
                        <h1 className="navbar-logo">
                            FOXTROT
                        </h1>
                    </Link>
                    <div className="nav-cart-container">
                        <FontAwesomeIcon
                            icon={faShoppingCart} className="nav-cart-icon">
                        </FontAwesomeIcon>
                    </div>
                </div>
            </nav>
        </>
    );
}
