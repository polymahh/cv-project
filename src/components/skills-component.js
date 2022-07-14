import { Component } from "react";
import "../styling/info-component.css"

class Skills extends Component{
    render(){
        let skills = this.props.skills.items.map((skill, index )=> <span key={index}>{skill}</span>)
        return(
            <div className="container">
                <button onClick={() => this.props.editSwitch(this.props.skills.name) }>edit</button>
                {skills}
            </div>
        )
    }
}

export default Skills