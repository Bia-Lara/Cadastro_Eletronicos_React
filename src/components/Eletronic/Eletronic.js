import React from "react";
import './Eletronic.css'

const Eletronic = (props) =>{

    return(
        <div className="eletronic">
            <div className="header">
                <img src={`/imgs/${props.img}`}/>
            </div>

            <div className="rodape">
                <p>{props.name}</p>
                <p>R$ {props.price}</p>
                <p>{props.state}</p>
                

            </div>
        </div>
    )
}

export default Eletronic