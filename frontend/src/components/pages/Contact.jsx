import {Header} from "../layout/Header";
import {NavButton} from "../layout/NavButton";
import '../../styles/animation.css'
import {useEffect, useRef} from "react";
import {FaPhoneVolume} from "react-icons/fa6";
import {SiGmail} from "react-icons/si";
import {IoLogoLinkedin} from "react-icons/io";
import axios from 'axios';


export function Contact() {
    const reference = useRef(null)
    useEffect(() => {
        if (reference.current) {
            reference.current.classList.add("scale-in-center")
        }
        return () => {
            if (reference.current) {
                reference.current.classList.remove("scale-in-center")
            }
        }
    }, [])



    function handleClick(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const form = Object.fromEntries(formData);
        async function fetch(){
            try{
                const response = await axios.post("https://api.web3forms.com/submit", form)
                if(response.status === 200){
                    alert("Form Submission Successfully")
                }
            }catch(error){
                console.log(error)
            }

        }
        fetch()
event.currentTarget.reset();
    }

    return (
        <>
            <div className="contact-container">
                <Header/>


                <form  onSubmit={handleClick} ref = {reference}  className="form-container">
                    <h1 style={{fontSize: "2.3rem", padding: "0", margin: "0"}} align="center">Get in touch</h1>
                    <h4 align="center">Need more information, contact me</h4>

                    <input type="hidden" name="access_key" value="37e3d468-3dfd-4b63-869c-d59396b641e3"/>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" required/>

                    <label htmlFor="">Email</label>
                    <input type="email" name="email" required/>
                    <label htmlFor="">Message</label>
                    <textarea rows="4" cols="50" name="message" required></textarea>

                    <input type="checkbox" name="botcheck" className="hidden" style={{display: "none"}}/>


                    <button type="submit">Submit Form</button>


                </form>
                <NavButton/>

            </div>


        </>

    );
}