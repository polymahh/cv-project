import React,{useState} from "react";

export default function Hobies (props){
    const [hobies, setHobies] = useState(props.hobies)

    const editSwitch = ()=> {
        setHobies({
            ...hobies,
            edit:!hobies.edit,
            items:(hobies.input === '' )? hobies.items : [...hobies.items, hobies.input],
            input:''
        })
    }

    const inputHandler =(e)=> {
        setHobies({
            ...hobies,
            input:e.target.value
        })
    }

    const deleteHandler = (e)=> {
        hobies.items.splice(e.target.id,1)
        setHobies({
            ...hobies,
            items:hobies.items
        })
    }
    
        let hobiesElements = hobies.items.map((hobby, index )=> <span key={index}>{hobby}</span>)
        if(hobies.edit){
            return(
                <div className="container">
                    <button onClick={editSwitch} name="hobies">save</button>
                    {hobiesElements.map((hobby,index) => 
                    <div key={index}>
                    {hobby}
                    <button id={index} name="hobies" onClick={deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <label id="AddSkill">Add Hobby:</label>
                    <input id="hobies" name="input" value={hobies.input} onChange={inputHandler} />
                    <button onClick={editSwitch} name="hobies">Add</button>
                </div>
            )
        }else {

            return(
                <div className="container">
                <button onClick={editSwitch} name="hobies">edit</button>
                {hobiesElements}
            </div>
        )
    }   
    
    
}
