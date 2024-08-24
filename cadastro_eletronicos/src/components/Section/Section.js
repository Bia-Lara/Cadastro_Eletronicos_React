import React from 'react';
import Eletronic from '../Eletronic/Eletronic';
import './Section.css'

const Section = (props) =>{

    const background = {

        backgroundColor : props.background
    }

    const border ={
       borderBottom: `4px solid ${props.underline}`
    }
    
    return(
        (props.eletronics.length>0)? 
        <section id={props.name} className='section' style={background}>
            <h3 style={border}>{props.name}</h3>

            <div className='sections'>
                {props.eletronics.map(eletronic => <Eletronic key= {eletronic.name} name={eletronic.name} 
                price={eletronic.price} 
                section={eletronic.section} 
                brand={eletronic.brand}
                state={eletronic.state}
                img={eletronic.img}
                
                />)} 
            </div>
            
        </section> 
        
        :""
    ) 
}

export default Section