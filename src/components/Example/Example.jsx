import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data-with-examples";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";



export default function Example(){

    const [selectedTopic, setSelectedTopic] = useState()

  // let tabContent = "Please click a button";

  function handleClick(buttonPressed){
    // console.log(buttonPressed)
    setSelectedTopic(buttonPressed);

    // switch (buttonPressed) {
    //   case "components":
    //     setSelectedTopic("This is for Component")        
    //     break;
      
    //   case "jsx":
    //     setSelectedTopic("This is for JSX") 
    //     break;
      
    //   case "props":
    //     setSelectedTopic("This is for Props") 
    //     break;
      
    //   case "state":
    //     setSelectedTopic("This is for state") 
    //     break;
    
    //   default:
    //     setSelectedTopic("This is for nothing") 
    //     break;
    // }
  }

  let tabContent = "Please choose an option";

  if (selectedTopic){
    tabContent = (<div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>)

  }

    return(
        <Section title="Examples" id="examples">

                

                <Tabs 
                
                ButtonsContainer = "menu"
                buttons={
                    <>
                        <TabButton buttonName="Components" isSelected={selectedTopic === "components"} onClick={()=> handleClick("components")}/>
                        <TabButton buttonName="JSX" isSelected={selectedTopic === "jsx"} onClick={()=> handleClick("jsx")}/>
                        <TabButton buttonName="Props" isSelected={selectedTopic === "props"} onClick={()=> handleClick("props")}/>
                        <TabButton buttonName="State" isSelected={selectedTopic === "state"} onClick={()=> handleClick("state")}/>
                    </>
                }> {tabContent} </Tabs>


        
                {/* <TabButton>Components</TabButton>
                <TabButton>JSX</TabButton>
                <TabButton>Props</TabButton>
                <TabButton>State</TabButton> */}

                
                

                {/* {!selectedTopic ? "Please select an option" : 
                <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>} */}

        {/* {!selectedTopic && "Pick something please" }
        {selectedTopic && (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>) } */}

        
        
                

      </Section>
      
    )
}