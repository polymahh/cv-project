import { useState } from "react";
import "../styling/info-component.css"

export default function Languages (props){

    const [languages, setLanguages] = useState(props.languages)

    const editSwitch = ()=> {
        setLanguages({
            ...languages,
            edit:!languages.edit,
            items:(languages.input === '' )? languages.items : [...languages.items, languages.input],
            input:''
        })
    }

    const inputHandler =(e)=> {
        setLanguages({
            ...languages,
            input:e.target.value
        })
    }

    const deleteHandler = (e)=> {
        languages.items.splice(e.target.id,1)
        setLanguages({
            ...languages,
            items:languages.items
        })
    }
let languageElement = languages.items.map((language, index )=> <span key={index}>{language}</span>)

        if(languages.edit){
            return(
                <div className="container">
                    <button onClick={editSwitch} name="languages">save</button>
                    {languageElement.map((language,index) => 
                    <div key={index}>
                    {language}
                    <button id={index} name="languages" onClick={deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <label id="AddSkill">Add Language:</label>
                    <input id="languages" name="input" value={languages.input} onChange={inputHandler} />
                    <button onClick={editSwitch} name="languages">Add</button>
                </div>
            )
        }else {

            return(
                <div className="container">
                <button onClick={editSwitch} name="languages">edit</button>
                {languageElement}
            </div>
        )
    }   
} 