import React from "react";
import './Input.css'

const Input = (props)=>{

    const written = (e)=>{
        props.changed(e.target.value);
    }


    return(
        <div className="input">
            <label>{props.label}</label>
            <input type={props.type} step={props.step} min={props.min} onChange={written} value={props.value}></input>
        </div>
    )
}

export default Input