import { Component } from "react";
import "../styling/presentation.css"

class Presentation extends Component{
    render (){
        if(!this.props.presentation.edit){

            return(
                <div className="presentation-container">
                    <button name="presentation" onClick={this.props.editHandler}>edit</button>
                    <span>Name :</span>
                    <span>{this.props.presentation.name}</span>
                    <span>About Me :</span>
                    <span>{this.props.presentation.aboutMe}</span>
                </div>
            )

        }else {
            return(
                <div className="presentation-container">
                    <button name="presentation" onClick={this.props.editHandler}>save</button>
                    <label id="name">Name :</label>
                    <input onChange = {this.props.inputHandler} id="presentation" name="name" value={this.props.presentation.name}/>
                    <label id="aboutMe">About Me :</label>
                    <textarea onChange = {this.props.inputHandler} id="presentation" name="aboutMe" value={this.props.presentation.aboutMe}/>
                    </div>
            )
        }
        
    }
}

export default Presentation