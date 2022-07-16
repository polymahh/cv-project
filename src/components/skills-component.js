import { Component } from "react";
import "../styling/info-component.css"

class Skills extends Component{
    render(){
        let skills = this.props.skills.items.map((skill, index )=> <span key={index}>{skill}</span>)
        if(this.props.skills.edit){
            return(
                <div className="container">
                    <button onClick={this.props.editSwitch} name="skills">save</button>
                    {skills.map((skill, index) => 
                    <div key={index}>
                    {skill}
                    <button id={index} name="skills" onClick={this.props.deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <label id="AddSkill">Add Skill:</label>
                    <input id="skills" name="input" value={this.props.skills.input} onChange={this.props.inputHandler} />
                    <button onClick={this.props.editSwitch} name="skills">Add</button>
                </div>
            )
        }else {

            return(
                <div className="container">
                <button onClick={this.props.editSwitch} name="skills">edit</button>
                {skills}
            </div>
        )
    }   
    }
}

export default Skills