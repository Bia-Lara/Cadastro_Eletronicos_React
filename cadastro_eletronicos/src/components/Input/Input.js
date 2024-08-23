import React from "react";

const Input = (props)=>{

    const written = (e)=>{
        props.changed(e.target.value);
    }


    return(
        <div>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={written}></input>
        </div>
    )
}

export default Input