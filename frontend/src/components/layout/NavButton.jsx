import '../../styles/dashboard.css'

export function NavButton(){
    function homeClick() {
        window.location.href = "/dashboard"
    }
    function skillsCLick() {
        window.location.href = "/skill"
    }

    function contactsClick() {
        window.location.href = "/contact"
    }

    function projectsClick() {
        window.location.href = "/project"
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