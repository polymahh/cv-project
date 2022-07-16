import { Component } from "react";
import "../styling/info-component.css"

class Info extends Component{
    

    render (){
        if(!this.props.info.edit){

            return(
                <div className="container">
                    <button name="info" onClick={this.props.editHandler}>edit</button>
                    <span>Phone :</span>
                    <span>{this.props.info.phone}</span>
                    <span>Email :</span>
                    <span>{this.props.info.email}</span>
                    <span>Adress :</span>
                    <span>{this.props.info.adress}</span>
                </div>
            )

        }else {
            return(
                <div className="container">
                    <button name="info" onClick={this.props.editHandler}>save</button>
                    <label id="phone">Phone :</label>
                    <input onChange = {this.props.inputHandler} id="info" name="phone" value={this.props.info.phone}/>
                    <label id="email">Email :</label>
                    <input onChange = {this.props.inputHandler} id="info" name="email" value={this.props.info.email}/>
                    <label id="adress">Adress :</label>
                    <input onChange = {this.props.inputHandler} id="info" name="adress" value={this.props.info.adress}/>
                </div>
            )
        }
        
    }
}


export default Info