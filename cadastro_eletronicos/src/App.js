import React, {useState} from 'react';
import Form from './components/Form/Form'
import Section from './components/Section/Section';
import LinkSection from './components/LinkSection/LinkSection';
import './App.css'

function App() {
  
  const [eletronics, setEletronics] = useState([])

  const add = (eletronic) =>{
    
    const newList = eletronics.slice()

    newList.push(eletronic)

    setEletronics(newList)

  
  }


  const sections = [
    {
      name : "Computadores",
      backgroundColor: "#D2B0E2",
      underlineColor: "#262D83"

    },
    
    {
      name: "Acessórios",
      backgroundColor: "#B8C6F5",
      underlineColor: "#A48EE2"
    },

    {
      name: "Impressoras",
      backgroundColor: "#E3E4E8",
      underlineColor: "#252C84"
    },
      
    {
      name: "Games",
      backgroundColor: "#F0F4F8",
      underlineColor: "#7A9AC2"
    },

    {
      name: "Gadgets",
      backgroundColor: "#C6D4F0",
      underlineColor: "#9C7FDF"
    }
        
  ]

  const sectionsList = sections.map(section => section.name)


  return (
    <div>

      
      <img className='fundo' src='/imgs/onda.svg' />
     
      
      <div className='container'>
        <section className='header'>
            {sectionsList.map(section => <LinkSection key={section} sectionName={section}/>)}

          </section>

          <section className='content'>

            <Form  onRegister={eletronic => add(eletronic)}  sections = {sectionsList}/>


            <div className="divImg">
                  <img src="/imgs/computer.svg"/>
            </div>
          </section>
          
         

        </div>

        <div className='sections'>
            {sections.map(section => <Section  key={section.name} name={section.name} background={section.backgroundColor} underline={section.underlineColor} eletronics= {eletronics.filter(eletronic => eletronic.section === section.name)} />)}
          </div>
          
      </div>
     
  );
}

export default App;
