import Link from "next/link";

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
                            <p className="nav-link">Contact</p>
                        </li>
                    </ul>
                    <Link href="/">
                        <h1 className="navbar-logo">
                            FOXTROT
                        </h1>
                    </Link>
                    <p className="nav-cart-icon">
                        test
                    </p>
                </div>
            </nav>
        </>
    );
}
