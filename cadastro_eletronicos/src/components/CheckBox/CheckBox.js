import React, {useState} from "react";

const CheckBox = (props)=>{

    const chosen = (e)=>{
        props.changed(e.target.checked)
    }

    return(
        <div>
            <input type="checkbox" value={props.value} onChange={chosen}/> {props.value}
        </div>
    )
}

export default CheckBox