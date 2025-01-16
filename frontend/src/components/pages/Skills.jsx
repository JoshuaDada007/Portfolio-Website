import '../../styles/animation.css';
import {useEffect, useRef} from "react";
import {Header} from "../layout/Header";
import {NavButton} from "../layout/NavButton";
import {skillBoxes} from "../seeds/myskills"
import MySkills from "../helper/SkillsHelper"
export function Skills() {
    const skillsRef = useRef(null);
    const langRef = useRef(null);

    const allSkills = skillBoxes.map((skill, index) =>
        <MySkills
            key={index}
            name = {skill.name}
            about = {skill.about}
            icon = {skill.software.map((skill, index) => <span key={index}>{skill}</span>)}
        />
    )


    useEffect(() => {
        if (skillsRef.current) {
            skillsRef.current.classList.add("scale-in-center");

        }
        return () => {
            if (skillsRef.current) {
                skillsRef.current.classList.remove("scale-in-center");
                if (langRef.current) {
                    langRef.current.classList.remove("pulsate-fwd");
                }
            }
        }

    }, []);

    return (
        <>
            <div className ="skills-container">
                <Header/>
                <section ref={skillsRef} className="skills">
                    {allSkills}
                </section>
                <NavButton/>
            </div>

        </>
    );
}
