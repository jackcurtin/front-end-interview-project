import Link from "next/link";
import {faBars, faShoppingCart, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";

export default function Navbar (){
    const [click, setClick] = useState(false);
    const [menuBars, setBars] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showBars = () => {
        if(window.innerWidth <= 960) {
            setBars(false);
        } else{
            setBars(true);
        }
    }

    useEffect(() => {
        showBars();
        window.addEventListener('resize', showBars)
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-bars-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={click ? faTimes : faBars} />
                    </div>
                    <ul className="nav-menu">
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
                    <FontAwesomeIcon
                        icon={faShoppingCart} className="nav-cart-icon">
                    </FontAwesomeIcon>
                </div>
            </nav>
        </>
    );
}
