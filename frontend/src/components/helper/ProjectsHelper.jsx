import { FaGithub} from "react-icons/fa";
import {useRef, useEffect} from "react";


export function ProjectsHelper(props) {
    const reference = useRef(null)
    useEffect(() => {
        if(reference.current){
            reference.current.classList.add("scale-in-center")
        }
        return () => {
            if(reference.current){
                reference.current.classList.remove("scale-in-center")
            }
        }
    }, [])

    return (
        <section ref = {reference} style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}} className="project">
            <div style={{
                width: "70%",
                height: "100%",

                display: props.display,
                alignItems: "center",
                justifyContent: "center"
            }} className="each-project">
                <img style={{width: "200px", height: "200px", borderRadius: "10%"}} src={props.img} alt=""/>
                <h1 style = {{textAlign: "center"}}>{props.name}</h1>
                <div style={{
                    minWidth: "300px",
                    width: "80%",
                    height: "30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <p align="center">{props.about}</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '80%'}}>
                    <a style={{color: "black"}} href={props.href}><FaGithub size={23}/> </a>
                </div>
                <p style={{gap: "20px"}} align="center">{props.tech}</p>


            </div>
        </section>
    )
}