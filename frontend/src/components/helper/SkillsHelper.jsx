import "../../styles/dashboard.css"
import "../../styles/animation.css"
import {useEffect, useRef} from "react";


export default function SkillsHelper(props){
    const langRef = useRef(null);
    const styles = {
        display: "flex",
        justifyContent: "space-around",
        width: "80%",
        height: "40px",

    }
    useEffect(() =>{
        if (langRef.current) {
            langRef.current.classList.add("pulsate-fwd");
        }
        return () => {
            if(langRef.current) {
                langRef.current.classList.remove("pulsate-fwd");

            }
        }
    },[])





return (
    <div className="tech-stack">
        <h3>{props.name}</h3>
        <div style={{
            width: "80%",
            height: "60%",
            borderRadius: "23px",
            border: "1px solid black",
            display: "flex",
            alignItems: "center"
        }}>
            <p align="center" style={{fontFamily: "monospace"}}>{props.about}</p>
        </div>

        <div ref={langRef} style={styles}>
            {props.icon}
        </div>
    </div>
)
}
