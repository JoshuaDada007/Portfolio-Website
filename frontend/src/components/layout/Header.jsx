import logo from "../../assets/images/ProfilePic.jpg";
import {useEffect, useRef} from "react";
import '../../styles/dashboard.css'

export function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.classList.add('page-transition');
        }

        return () => {
            if (headerRef.current) {
                headerRef.current.classList.remove("page-transition");
            }
        };    }, []);

    return(
        <>
            <header ref = {headerRef} className="header">
                <a href="/dashboard"><img className="header-logo" src={logo} alt="pom-logo"/></a>
                <nav className="nav">
                <ul className="nav-list">
                        <li><a href="https://joshcodes-eight.vercel.app/dashboard" className="nav-item">Home</a></li>
                        <li><a href="https://joshcodes-eight.vercel.app/skill" className="nav-item">Skills</a></li>
                        <li><a href="https://joshcodes-eight.vercel.app/project" className="nav-item">Project</a></li>
                        <li><a href="/https://joshcodes-eight.vercel.app/contact" className="nav-item">Contact</a></li>
                    </ul>
                </nav>
            </header>
            </>
    )
}