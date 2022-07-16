import { Component } from "react";

class Hobies extends Component{
    render(){
    
        let hobies = this.props.hobies.items.map((hobby, index )=> <span key={index}>{hobby}</span>)
        if(this.props.hobies.edit){
            return(
                <div className="container">
                    <button onClick={this.props.editSwitch} name="hobies">save</button>
                    {hobies.map((hobby,index) => 
                    <div key={index}>
                    {hobby}
                    <button id={index} name="hobies" onClick={this.props.deleteHandler}>delete</button>
                    </div>
                    )}
                    <hr style={{border: "1px solid white",width:"90%"}}/>
                    <label id="AddSkill">Add Hobby:</label>
                    <input id="hobies" name="input" value={this.props.hobies.input} onChange={this.props.inputHandler} />
                    <button onClick={this.props.editSwitch} name="hobies">Add</button>
                </div>
            )
        }else {

            return(
                <div className="container">
                <button onClick={this.props.editSwitch} name="hobies">edit</button>
                {hobies}
            </div>
        )
    }   
    
    }
}

export default Hobies