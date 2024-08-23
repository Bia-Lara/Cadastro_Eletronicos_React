import React, {useState} from "react";
import Select from "../Select/Select";
import Input from "../Input/Input";
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";

const Form = (props)=>{

    const sections=["Computadores",
        "Acessórios",
        "Impressoras",
        "Games,Gadgets"]

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

    const save = (e)=>{
        e.preventDefault();
        console.log(section, brand, name, price, isNewChecked? "Novo": "", isUsedChecked? "Usado":"")
    }


    return(
        <div>
            <form onSubmit={save}>
                <Select label="Seção" itens={sections} changed={value=>setSection(value)}/>
                <Select label="Marca" itens={brands} changed={value=>setBrand(value)}/>
                
                <Input type="text" label="Nome" placeholder="Digite o nome do produto" changed={value=>setName(value)}/>
                <Input type="number" label="Preço" placeholder="Digite o preço do produto" changed={value=>setPrice(value)}/>
                
                <CheckBox value="Novo" isChecked={isNewChecked} changed={setIsNewChecked} />
                <CheckBox value="Usado" isChecked={isUsedChecked} changed={setIsUsedChecked} />

                <Button type="submit" text="Enviar"/>
                
            
            </form>
        </div>
    )
}

export default Form