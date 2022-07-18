import { Component } from "react";

class Educations extends Component{
    render(){
    
        let educations = this.props.educations.items.map((education, index )=> <div key={index}>
            <span>{education.name}</span>
            <p>{education.description}</p>
            </div>)
        if(this.props.educations.edit){
            return(
                <div className="presentation-container">
                    <button onClick={this.props.preSwitch} name="educations">save</button>
                    {educations.map((education,index) => 
                    <div key={index}>
                    {education}
                    <button id={index} name="educations" onClick={this.props.deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <h3 id="AddSkill">Add Education:</h3>
                    <label>Title:</label>
                    <input id="educations" name="inputName" value={this.props.educations.inputName} onChange={this.props.inputHandler} required/>
                    <label>Description:</label>
                    <textarea id="educations" name="inputDescription" value={this.props.educations.inputDescription} onChange={this.props.inputHandler} required/>
                    <button onClick={this.props.preSwitch} name="educations">Add</button>
                </div>
            )
        }else {

            return(
                <div className="presentation-container">
                <button onClick={this.props.preSwitch} name="educations">edit</button>
                {educations}
            </div>
        )
    }   
    
    }
}

export default Educations 