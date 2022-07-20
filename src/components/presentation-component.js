import React,{ useState } from "react";
import "../styling/presentation.css"

const Presentation = (props)=> {

    const [presentation,setPresentation] = useState(props.presentation)

    const editHandler = ()=> {
        setPresentation({
            ...presentation,
            edit:!presentation.edit
        })
    }

    const inputHandler = (e) =>{
        let name = e.target.name
        setPresentation({
            ...presentation,
            [name]:e.target.value
    
        })
      }
        if(!presentation.edit){

            return(
                <div className="presentation-container">
                    <button name="presentation" onClick={editHandler}>edit</button>
                    <span>Name :</span>
                    <span>{presentation.name}</span>
                    <span>About Me :</span>
                    <span>{presentation.aboutMe}</span>
                </div>
            )

        }else {
            return(
                <div className="presentation-container">
                    <button name="presentation" onClick={editHandler}>save</button>
                    <label id="name">Name :</label>
                    <input onChange = {inputHandler} id="presentation" name="name" value={presentation.name}/>
                    <label id="aboutMe">About Me :</label>
                    <textarea onChange = {inputHandler} id="presentation" name="aboutMe" value={presentation.aboutMe}/>
                    </div>
            )
        }
        
}

export default Presentation