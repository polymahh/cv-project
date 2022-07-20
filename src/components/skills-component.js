import React, {useState} from "react" 
import "../styling/info-component.css"


export default function Skills (props) {

    const [skills,setSkills] = useState(props.skills)

    const editSwitch = ()=> {
        setSkills({
            ...skills,
            edit:!skills.edit,
            items:(skills.input === '' )? skills.items : [...skills.items, skills.input],
            input:''
        })
    }

    const inputHandler =(e)=> {
        setSkills({
            ...skills,
            input:e.target.value
        })
    }

    const deleteHandler = (e)=> {
        skills.items.splice(e.target.id,1)
        setSkills({
            ...skills,
            items:skills.items
        })
    }

    let skillElements = skills.items.map((skill, index )=> <span key={index}>{skill}</span>)


    if(skills.edit){
        return(
            <div className="container">
                <button onClick={editSwitch} name="skills">save</button>
                {skillElements.map((skill, index) => 
                <div key={index}>
                {skill}
                <button id={index} name="skills" onClick={deleteHandler}>delete</button>
                </div>
                )}
                <hr style={{border: "1px solid white",width:"90%"}}/>
                <label id="AddSkill">Add Skill:</label>
                <input id="skills" name="input" value={skills.input} onChange={inputHandler} />
                <button onClick={editSwitch} name="skills">Add</button>
            </div>

        )
    }else {

        return(
            <div className="container">
            <button onClick={editSwitch} name="skills">edit</button>
            {skillElements}
        </div>
    )
} 

}
