import React, {useState} from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import './Form.css'


const Form = (props)=>{

    const sections=["Computadores",
        "Acessórios",
        "Impressoras",
        "Games",
        "Gadgets"]

    const brands=["HP",
        "Dell",
        "Positivo",
        "Asus",
        "Xing Ling genérico"]

    const [section, setSection] = useState('Computadores')
    const [brand, setBrand] = useState('HP')
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [isNewChecked, setIsNewChecked] = useState(false);
    const [isUsedChecked, setIsUsedChecked] = useState(false);

    const validateForm = () => {
        return name.trim() !== '' && price !== '' && (isNewChecked || isUsedChecked);
    };

    const save = (e)=>{
        e.preventDefault();

        if (!validateForm()) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        let img =''

        if(brand === "HP"){
            img= "hp.png"
        }

        if(brand === "Dell"){
            img= "dell.png"
        }

        if(brand === "Positivo"){
            img = "positivo.png"
        }

        if(brand === "Asus"){
            img = "asus.png"
        }

        if(brand === "Xing Ling genérico"){
            img ="xingLing.png"
        }

        props.onRegister(
            {
                "name": name,
                "price": price,
                "section" : section,
                "brand" : brand,
                "state": isNewChecked? "Novo" : "Usado",
                "img" : img 
                
            }
        )


        setSection('Computadores');
        setBrand('HP');
        setName('');
        setPrice('');
    
    }

    


    return(
        
        <div className="form">
            <form onSubmit={save}>
                <Select label="Seção" itens={props.sections} changed={value=>setSection(value)}/>
                <Select label="Marca" itens={brands} changed={value=>setBrand(value)}/>
                
                <Input type="text" label="Nome" value={name} changed={value=>setName(value)}/>
                <Input type="number" label="Preço" value={price} step="0.01" min="0"  changed={value=>setPrice(value)}/>
                
                <div className="divCheckBoxs">
                    <CheckBox value="Novo" isChecked={isNewChecked} changed={setIsNewChecked} />
                    <CheckBox value="Usado" isChecked={isUsedChecked} changed={setIsUsedChecked} />
                </div>
                

                <Button type="submit" text="Enviar"/>
            </form>
        </div>
            

    )
}

export default Form