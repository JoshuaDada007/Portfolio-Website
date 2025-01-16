import {useNavigate} from "react-router-dom";


export function NotFound () {
    const navigate = useNavigate();
    function handleClick(){
        navigate("/dashboard")
    }
    return (
        <>
            <p>This page does not exist </p>
            <button onClick = {handleClick}>Home</button>
        </>
    )
}