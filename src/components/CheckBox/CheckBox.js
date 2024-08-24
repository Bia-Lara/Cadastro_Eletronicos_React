import React, {useState} from "react";
import './CheckBox.css'

const CheckBox = (props)=>{

    const chosen = (e)=>{
        props.changed(e.target.checked)
    }

    return(
        <div className="checkbox">
            <input type="checkbox" value={props.value} onChange={chosen}/> {props.value}
        </div>
    )
}

export default CheckBox