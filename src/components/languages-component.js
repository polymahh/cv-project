import { Component } from "react";
import "../styling/info-component.css"

class Languages extends Component{
    render(){
    
        let languages = this.props.languages.items.map((language, index )=> <span key={index}>{language}</span>)
        if(this.props.languages.edit){
            return(
                <div className="container">
                    <button onClick={this.props.editSwitch} name="languages">save</button>
                    {languages.map((language,index) => 
                    <div key={index}>
                    {language}
                    <button id={index} name="languages" onClick={this.props.deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <label id="AddSkill">Add Language:</label>
                    <input id="languages" name="input" value={this.props.languages.input} onChange={this.props.inputHandler} />
                    <button onClick={this.props.editSwitch} name="languages">Add</button>
                </div>
            )
        }else {

            return(
                <div className="container">
                <button onClick={this.props.editSwitch} name="languages">edit</button>
                {languages}
            </div>
        )
    }   
    
    }
}

export default Languages 