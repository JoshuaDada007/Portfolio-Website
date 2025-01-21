import logo from "../../assets/images/ProfilePic.jpg";
import {useEffect, useRef} from "react";
import '../../styles/dashboard.css'
import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router";

export function Header() {
    const headerRef = useRef(null);
    const {isAuthenticated, logout} = useAuth0();

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.classList.add('page-transition');
        }

        return () => {
            if (headerRef.current) {
                headerRef.current.classList.remove("page-transition");
            }
        };
    }, []);

    return (
        <>
            {isAuthenticated && <div style={{
                width: '100%',
                height: "40px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",

            }}>
                <button style={{
                    border: "none",
                    padding: "10px",
                    margin: "0",
                    color: "inherit",
                    backgroundColor: "#403d39",
                    font: "inherit",
                    cursor: "pointer"
                }} onClick={() => logout()}>logout
                </button>
            </div>}
            <header ref={headerRef} className="header">
                <a href="/dashboard"><img className="header-logo" src={logo} alt="pom-logo"/></a>
                <nav className="nav">
                    <ul className="nav-list">
                        <Link to="/dashboard" className="nav-item">Home</Link>
                        <Link to="/skill" className="nav-item">Skills</Link>
                        <Link to="/project" className="nav-item">Projects</Link>
                        <Link to="/contact" className="nav-item">Contact</Link>

                    </ul>
                </nav>
            </header>
        </>
)
}