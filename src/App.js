import { Component } from "react";
import "./styling/App.css"
import Info from "./components/info-component";
import Skills from "./components/skills-component";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      info:{
        edit:false,
        phone:"0690008290",
        email:"otman.elkantaoui@gmail.com",
        adress: "82adress,safi,morocco"

      },
      skills:{
        name:'skills',
        edit:false,
        items:[
          "JavaScript",
          "Html / Css",
          "React",
          "wordpress",
          "shopify",
          "inkskape",
        ]
      },
      hobies:{
        name: 'hobies',
        edit:false,
        items:[]
      }
    }

    this.editHandler = this.editHandler.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
    this.editSwitch = this.editSwitch.bind(this)
  }
 
  editHandler(){
    this.setState({
      info:{
        edit:!this.state.info.edit,
        phone:this.state.info.phone,
        email:this.state.info.email,
        adress:this.state.info.adress,
      }

    })
  }

  editSwitch(name){
    console.log(name)
    Object.keys(this.state).map((item) => {
      if(item === name){
        this.setState({
          [name]:{
            name:this.state[name].name,
            edit:!this.state[name].edit,
            items: this.state[name].items
          }
        })
        
        console.log(this.state[name].edit)
        
      }
    })
    
  }

  inputHandler(e){
    let name = e.target.name
    this.setState({
      info:{
        edit:this.state.info.edit,
        phone: (name === 'phone')? e.target.value : this.state.info.phone,
        email: (name === 'email')? e.target.value : this.state.info.email,
        adress: (name === 'adress')? e.target.value : this.state.info.adress

      }

    })
  }

  render(){
  
  return (
    <div className="App">
      <header className="App-header">
          <h2>CV Maker</h2>
        <p>
          <small>this a project for "The Odin Project"</small>
        </p>
        
      </header>
      <div className="bodyContainer">
        <div className="info">
            <Info editHandler={this.editHandler} info={this.state.info} inputHandler={this.inputHandler}/>
            <div className="divider skils"> Skills</div>
            <Skills skills={this.state.skills} editSwitch={this.editSwitch}/>
            <div className="divider lang"> Languages</div>
            <div className="divider hobies"> Hobies</div>
        </div>
        <div className="education-Experience"></div>
      </div>
    </div>
  );
}
}

export default App;
