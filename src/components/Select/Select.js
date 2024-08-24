import React, {useState} from 'react';
import './Select.css'

const Select = (props)=>{

    const chosen = (e)=>{
        props.changed(e.target.value)
    }

    return(
        <div className='select'>
            <label>{props.label}</label>
            <select onChange={chosen}>
                {props.itens.map(item=><option key={item}>{item}</option>)}
            </select>
        </div>
        
    )
}

export default Select