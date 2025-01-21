import '../../styles/dashboard.css'
import {Link} from "react-router";

export function NavButton() {
    // function homeClick() {
    //     window.location.href = "/dashboard"
    // }
    // function skillsCLick() {
    //     window.location.href = "/skill"
    // }
    //
    // function contactsClick() {
    //     window.location.href = "/contact"
    // }
    //
    // function projectsClick() {
    //     window.location.href = "/project"
    // }


    return (
        <div className="nav-container">
            {/*<button  onClick={homeClick}>Home</button>*/}
            {/*<button onClick={skillsCLick}>Skills</button>*/}
            {/*<button  onClick={projectsClick}>Projects</button>*/}
            {/*<button  onClick={contactsClick}>Contact</button>*/}
            <Link className="nav-links" to="/dashboard">Home</Link>
            <Link className="nav-links" to="/skill">Skills</Link>
            <Link className="nav-links" to="/project">Projects</Link>
            <Link className="nav-links" to="/contact">Contact</Link>

        </div>
    )

}