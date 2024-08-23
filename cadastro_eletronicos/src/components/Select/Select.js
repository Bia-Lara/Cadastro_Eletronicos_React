import React, {useState} from 'react';

const Select = (props)=>{

    const chosen = (e)=>{
        props.changed(e.target.value)
    }

    return(
        <div>
            <label>{props.label}</label>
            <select onChange={chosen}>
                {props.itens.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>
        
    )
}

export default Select