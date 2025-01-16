import '../../styles/dashboard.css'
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import '../../styles/animation.css'
import {Header} from "../layout/Header";
import {NavButton} from "../layout/NavButton";


export function Dashboard() {
    const [user, setUser] = useState(null);
    const aboutRef = useRef(null);
    const sweRef = useRef(null);

    useEffect(() => {

        if (aboutRef.current) {
            aboutRef.current.classList.add("scale-in-center");
            if(sweRef.current) {
                sweRef.current.classList.add("typing");
            }

        }


        return () => {

            if (aboutRef.current) {
                aboutRef.current.classList.remove("scale-in-center");
                if(sweRef.current) {
                    sweRef.current.classList.remove("typing");
                }
            }

        };
    }, []);


    useEffect(() => {
        async function fetchData() {
            try {
                // API request to get user data, if logged in
                const response = await axios.get("https://localhost:8443/userInfo", {withCredentials: true});
                console.log("User data fetched:", response.data);

                // If the user is authenticated, set user data in state
                setUser(response.data.name);
            } catch (error) {
                console.log("Error fetching user data:", error);

                // If there is an error (e.g., user is not authenticated), set user as null

            }
        }

        fetchData();
    }, []);
    console.log(`my name is ${user}!`);


    return (
        <>
            <div className = "dashboard-container">
                <Header/>
                <h3> Hi, {user || "Guest"}</h3>

                    <div ref={aboutRef} className="intro">
                        <p style={{ fontSize: "0.8rem", margin: "0", padding: "0"}}> my name is,</p>
                        <h1  style={{fontSize: "3.2rem", margin: "0", padding: "0"}}>Joshua Dada</h1>
                        <h1 ref = {sweRef}style={{fontSize: "1.5rem", margin: "0", padding: "0", width: "80%", textAlign: "center"}}>I'm a Full-Stack
                            developer,</h1>
                        <div className = "paragraph">
                            <p style = {{width: "100%", paddingBottom: "5px", fontSize: "0.8rem" }}>
                                passionate about designing and building innovative web applications that deliver seamless user experiences. With a solid foundation in both front-end and back-end technologies, I excel at tackling complex challenges and crafting efficient, user-focused solutions. My journey in software development is driven by curiosity, continuous learning, and a commitment to staying at the forefront of technology. I thrive in collaborative environments, contributing to meaningful projects while constantly evolving as a developer.
                            </p>
                        </div>
                    </div>
                <NavButton/>


            </div>

        </>
    );
}