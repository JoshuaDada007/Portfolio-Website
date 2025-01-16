export function Button(props){
    return(
        <button
            style = {{width: "20px", height: "20px", margin: "2px", border: "1px solid black", textAlign: "center", backgroundColor: props.color}}
            id = {props.id}
            disabled = {props.disabled}

            onClick = {() => props.click(props.id)}>
            {props.value}
        </button>
    )
}
export function Langz(props){
    return(
        <span id = {props.id} show = {props.show} style = {{backgroundColor: props.color, margin: "2px", padding: "4px", gap: "10px",width: "fit-content", height: "25px", opacity: props.opacity, color: "black"}}>
            {props.value}
        </span>
    )
}

export function Letter(props){
    return(
        <span style =  {{width: "30px", height: "30px", margin: "2px", border: "1px solid black", textAlign: "center", color: props.color}}>{props.value}</span>
    )
}