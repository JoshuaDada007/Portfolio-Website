import '../../styles/dashboard.css'

export function NavButton(){
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


    return (
        <div className = "nav-container">
            <button  onClick={homeClick}>Home</button>
            <button onClick={skillsCLick}>Skills</button>
            <button  onClick={projectsClick}>Projects</button>
            <button  onClick={contactsClick}>Contact</button>

        </div>
    )
}