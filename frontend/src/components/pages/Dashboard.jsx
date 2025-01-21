import '../../styles/dashboard.css'
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import '../../styles/animation.css'
import {Header} from "../layout/Header";
import {NavButton} from "../layout/NavButton";
import {useAuth0} from "@auth0/auth0-react";

export function Dashboard() {
    const aboutRef = useRef(null);
    const sweRef = useRef(null);
    const {isAuthenticated, user, isLoading, logout} = useAuth0();

    useEffect(() => {

        if (aboutRef.current) {
            aboutRef.current.classList.add("scale-in-center");
            if (sweRef.current) {
                sweRef.current.classList.add("typing");
            }

        }


        return () => {

            if (aboutRef.current) {
                aboutRef.current.classList.remove("scale-in-center");
                if (sweRef.current) {
                    sweRef.current.classList.remove("typing");
                }
            }

        };
    }, []);


    console.log(`authenticated ? ${isAuthenticated}!`);
    console.log(user)
    console.log(JSON.stringify(user));


    return (
        <>
            <div className="dashboard-container">
                <div style={{
                    width: '100%',
                    height: "40px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",

                }}>
                    { <button style={{
                        border: "none",
                        padding: "10px",
                        margin: "0",
                        color: "inherit",
                        backgroundColor: "#403d39",
                        font: "inherit",
                        cursor: "pointer"}} onClick={() => logout()}>logout</button>
                    }                </div>
                <Header/>
                <h3> Hi, {isAuthenticated ? user.name : isLoading ? "" : "Guest"}</h3>
                <div ref={aboutRef} className="intro">
                    <p style={{fontSize: "0.8rem", margin: "0", padding: "0"}}> my name is,</p>
                    <h1 style={{fontSize: "3.2rem", margin: "0", padding: "0"}}>Joshua Dada</h1>
                    <h1 ref={sweRef}
                        style={{fontSize: "1.5rem", margin: "0", padding: "0", width: "80%", textAlign: "center"}}>I'm a
                        Full-Stack
                        developer,</h1>
                    <div className="paragraph">
                        <p style={{width: "100%", paddingBottom: "5px", fontSize: "0.8rem"}}>
                            passionate about designing and building innovative web applications that deliver seamless
                            user experiences. With a solid foundation in both front-end and back-end technologies, I
                            excel at tackling complex challenges and crafting efficient, user-focused solutions. My
                            journey in software development is driven by curiosity, continuous learning, and a
                            commitment to staying at the forefront of technology. I thrive in collaborative
                            environments, contributing to meaningful projects while constantly evolving as a developer.
                        </p>
                    </div>
                </div>
                <NavButton/>


            </div>

        </>
    );
}