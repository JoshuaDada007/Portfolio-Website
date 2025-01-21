import '../../styles/animation.css'
import {Header} from "../layout/Header";
import {NavButton} from "../layout/NavButton";
import {allProjects} from "../seeds/myProjects";
import {ProjectsHelper} from "../helper/ProjectsHelper";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

import {useState} from "react";

export function Project() {
    const [count, setCount] = useState(0);
    console.log("count", count)

    function handleLeft() {
        setCount(count => count - 1)

    }

    function handleRight() {
        setCount(count => count + 1)

        console.log(currentProject)

    }


    const styles = {
        width: "30px",
        height: "30px",
        color: "#d4a373"
    }


    const currentProject = allProjects.map((project, index) => {
        if (index === count) {
            return (
                <ProjectsHelper
                    key={index}
                    name={project.name}
                    about={project.about}
                    tech={project.tech.map(item => <span style={styles} key={index}>{item}</span>)}
                    img={project.img}
                    href={project.github}
                />
            )
        }
    })


    return (
        <>

            <div style={{width: "100%", height: "100vh", display: "flex", flexDirection: "column",justifyContent: "space-between", alignItems: "center"}}>

                <Header/>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "80%"
                }}>
                    <button disabled={count === 0} onClick={handleLeft} style={{marginLeft: "30px"}}><FaArrowLeft/>
                    </button>
                    {currentProject}
                    <button disabled={count === allProjects.length - 1} onClick={handleRight}
                            style={{marginRight: "30px"}}>
                        <FaArrowRight/></button>
                </div>

                <NavButton/>
            </div>


        </>
    )
}

