import CoolComponent from "../CoolComponent/CoolComponent";
import { CORE_CONCEPTS } from "../../data-with-examples";


export default function CoreConcept(){

    return(
    <div id="core-concepts">
    <h2>Core Concepts</h2>
    <ul>
      {/* <CoolComponent image={CORE_CONCEPTS[0].image} title= {CORE_CONCEPTS[0].title} description= {CORE_CONCEPTS[0].description} />
      <CoolComponent image={CORE_CONCEPTS[1].image} title= {CORE_CONCEPTS[1].title} description= {CORE_CONCEPTS[1].description} />
      <CoolComponent image={CORE_CONCEPTS[2].image} title= {CORE_CONCEPTS[2].title} description= {CORE_CONCEPTS[2].description} />
      <CoolComponent image={CORE_CONCEPTS[3].image} title= {CORE_CONCEPTS[3].title} description= {CORE_CONCEPTS[3].description} /> */}

      {CORE_CONCEPTS.map(concept => (
        <CoolComponent key={concept.title} image = {concept.image} title= {concept.title} description= {concept.description}/>
        ))}

        {CORE_CONCEPTS.map(concept => (<CoolComponent {...concept}/>))}

    </ul>
  </div>
  )
}