import {useRef, useEffect} from "react";
import '../../styles/dashboard.css'
import {Link} from 'react-router-dom'

export function NavButton(){
    // const navRef = useRef(null);
    function homeClick() {
        window.location.href = "http://localhost:3000/dashboard"
    }
    function skillsCLick() {
        window.location.href = "http://localhost:3000/skills"
    }

    function contactsClick() {
        window.location.href = "http://localhost:3000/contact"
    }

    function projectsClick() {
        window.location.href = "http://localhost:3000/projects"
    }

    // useEffect(() => {
    //     if (navRef.current) {
    //         navRef.current.classList.add("shadow-drop-center");
    //     }
    //     return () => navRef.current.remove("shadow-drop-center");
    //     },[]);


    return (
        <div className = "nav-container">
            <button  onClick={homeClick}>Home</button>
            <button onClick={skillsCLick}>Skills</button>
            <button  onClick={projectsClick}>Projects</button>
            <button  onClick={contactsClick}>Contact</button>

        </div>
    )
}