import {FaSquareGithub} from "react-icons/fa6";
import {FcGoogle} from "react-icons/fc";
import '../../styles/login.css'
import ProfilePicc from "../../assets/images/ProfilePic.jpg"
import {useRef, useEffect} from "react";
import {App} from "../showcase/App"

export function Login() {
    const reference = useRef(null)
    const headerRef = useRef(null)
    useEffect(() => {
        if(reference.current) {
            reference.current.classList.add("tracking-in-expand")
            if(headerRef.current) {
                headerRef.current.classList.add("typing")
            }
        }
        return () => {
            if(reference.current) {
                reference.current.classList.remove("tracking-in-expand")
                if(headerRef.current) {
                    headerRef.current.classList.remove("typing")
                }
            }
        }
    }, [])


    function gitLogin() {
        window.location.href = "http://localhost:8080/oauth2/authorization/github"
    }

    function googleLogin() {
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
    }

    function guestLogin() {
        window.location.href = "http://localhost:3000/dashboard"
    }

    return (
        <>
            <div className="container">
                <section className="loginContainer">

                    <div className="sign-in-container">
                        <h1 ref={reference} align="center"  style={{ width: "100%", fontSize: "2.8rem", padding: 0, margin: 0}} > Welcome</h1>
                        <p align="center">Sign in to view my portfolio</p>
                        <img style={{width: "150px", height: "150px", borderRadius: "50%"}} src={ProfilePicc}
                             alt="profilePicc"/>


                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <button onClick={gitLogin} className="login-button">
                                <FaSquareGithub size={23}/> Sign In with Github
                            </button>
                            <button onClick={googleLogin} className="login-button">
                                <FcGoogle size={23}/> Sign In with Google
                            </button>
                            <h1>OR</h1>
                            <button onClick={guestLogin}>Continue as guest</button>
                        </div>

                    </div>

                </section>
                <section className="projectContainer">
                    <div className = "sample-project" >
                        <h3 ref={headerRef} style={{ width: "100%", fontSize: "1.8rem", padding: 0, margin: 0}} align="center">Explore Projects</h3>
                        <App/>

                    </div>

                </section>
            </div>

        </>
    );

}