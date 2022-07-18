import { Component } from "react";
import "../styling/presentation.css"

class Experience extends Component{
    render(){
    
        let experiences = this.props.experiences.items.map((experience, index )=> <div key={index}>
            <span>{experience.name}</span>
            <p>{experience.description}</p>
            </div>)
        if(this.props.experiences.edit){
            return(
                <div className="presentation-container">
                    <button onClick={this.props.preSwitch} name="experiences">save</button>
                    {experiences.map((experience,index) => 
                    <div key={index}>
                    {experience}
                    <button id={index} name="experiences" onClick={this.props.deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <h3 id="AddSkill">Add Experience:</h3>
                    <label>Title:</label>
                    <input id="experiences" name="inputName" value={this.props.experiences.inputName} onChange={this.props.inputHandler} required/>
                    <label>Description:</label>
                    <textarea id="experiences" name="inputDescription" value={this.props.experiences.inputDescription} onChange={this.props.inputHandler} required/>
                    <button onClick={this.props.preSwitch} name="experiences">Add</button>
                </div>
            )
        }else {

            return(
                <div className="presentation-container">
                <button onClick={this.props.preSwitch} name="experiences">edit</button>
                {experiences}
            </div>
        )
    }   
    
    }
}

export default Experience