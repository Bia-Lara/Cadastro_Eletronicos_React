import React from "react";
import './LinkSection.css'


const LinkSection = (props)=>{
    return(

        <a href={`#`+props.sectionName}>{props.sectionName}</a>

    )
}

export default LinkSection