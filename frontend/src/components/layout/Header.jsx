import logo from "../../assets/images/ProfilePic.jpg";
import {useEffect, useRef} from "react";
import '../../styles/dashboard.css'
import {useAuth0} from "@auth0/auth0-react";

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
            { isAuthenticated && <div style={{
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
                }} onClick = {() => logout()}>logout
                </button>
            </div>}
            <header ref={headerRef} className="header">
                <a href="/dashboard"><img className="header-logo" src={logo} alt="pom-logo"/></a>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><a href="/dashboard" className="nav-item">Home</a></li>
                        <li><a href="/skill" className="nav-item">Skills</a></li>
                        <li><a href="/project" className="nav-item">Project</a></li>
                        <li><a href="/contact" className="nav-item">Contact</a></li>

                    </ul>
                </nav>
            </header>
        </>
    )
}