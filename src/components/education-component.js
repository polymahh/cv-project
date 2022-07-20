import React, { useState } from "react";

export default function Educations (props) {

    const [educations, setEducations] = useState(props.educations)


    const editSwitch = ()=> {
        let input = {
          name:educations.inputName,
          description:educations.inputDescription
        }
      
        setEducations({
            ...educations,
            edit:!educations.edit,
            items:(educations.inputName === ''|| educations.inputDescription === '' )? educations.items : [...educations.items, input],
            inputName:'',
            inputDescription:''
          
        })
}

const inputHandler =(e)=> {
    setEducations({
        ...educations,
        [e.target.name]:e.target.value
    })
}

const deleteHandler = (e)=> {
    educations.items.splice(e.target.id,1)
    setEducations({
        ...educations,
        items:educations.items
    })
}
    
        let educationElements = educations.items.map((education, index )=> <div key={index}>
            <span>{education.name}</span>
            <p>{education.description}</p>
            </div>)
        if(educations.edit){
            return(
                <div className="presentation-container">
                    <button onClick={editSwitch} name="educations">save</button>
                    {educationElements.map((education,index) => 
                    <div key={index}>
                    {education}
                    <button id={index} name="educations" onClick={deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <h3 id="AddSkill">Add Education:</h3>
                    <label>Title:</label>
                    <input id="educations" name="inputName" value={educations.inputName} onChange={inputHandler} required/>
                    <label>Description:</label>
                    <textarea id="educations" name="inputDescription" value={educations.inputDescription} onChange={inputHandler} required/>
                    <button onClick={editSwitch} name="educations">Add</button>
                </div>
            )
        }else {

            return(
                <div className="presentation-container">
                <button onClick={editSwitch} name="educations">edit</button>
                {educationElements}
            </div>
        )
    }   
    
}
