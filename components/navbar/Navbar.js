import Link from "next/link";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Navbar (){
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
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
