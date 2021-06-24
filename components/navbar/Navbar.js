import Link from "next/link";

export default function Navbar (){
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link href="/">
                        <h1 className="navbar-logo">
                            FOXTROT
                        </h1>
                    </Link>
                </div>
            </nav>
        </>
    );
}
