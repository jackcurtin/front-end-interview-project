import Link from "next/link";

export default function Navbar (){
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link href="/" className="navbar-logo">
                        Foxtrot
                    </Link>
                </div>
            </nav>
        </>
    );
}
