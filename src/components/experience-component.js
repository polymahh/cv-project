import React, {useState} from "react";
import "../styling/presentation.css"

export default function Experience (props){

    const [experiences, setExperiences] = useState(props.experiences)

    const editSwitch = ()=> {
            let input = {
              name:experiences.inputName,
              description:experiences.inputDescription
            }
          
            setExperiences({
                ...experiences,
                edit:!experiences.edit,
                items:(experiences.inputName === ''|| experiences.inputDescription === '' )? experiences.items : [...experiences.items, input],
                inputName:'',
                inputDescription:''
              
            })
    }

    const inputHandler =(e)=> {
        setExperiences({
            ...experiences,
            [e.target.name]:e.target.value
        })
    }

    const deleteHandler = (e)=> {
        experiences.items.splice(e.target.id,1)
        setExperiences({
            ...experiences,
            items:experiences.items
        })
    }
    
    
        let experienceElements = experiences.items.map((experience, index )=> <div key={index}>
            <span>{experience.name}</span>
            <p>{experience.description}</p>
            </div>)
        if(experiences.edit){
            return(
                <div className="presentation-container">
                    <button onClick={editSwitch} name="experiences">save</button>
                    {experienceElements.map((experience,index) => 
                    <div key={index}>
                    {experience}
                    <button id={index} name="experiences" onClick={deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <h3 id="AddSkill">Add Experience:</h3>
                    <label>Title:</label>
                    <input id="experiences" name="inputName" value={experiences.inputName} onChange={inputHandler} required/>
                    <label>Description:</label>
                    <textarea id="experiences" name="inputDescription" value={experiences.inputDescription} onChange={inputHandler} required/>
                    <button onClick={editSwitch} name="experiences">Add</button>
                </div>
            )
        }else {

            return(
                <div className="presentation-container">
                <button onClick={editSwitch} name="experiences">edit</button>
                {experienceElements}
            </div>
        )
    }   
    

}

