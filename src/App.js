import { Component } from "react";
import "./styling/App.css"
import Info from "./components/info-component";
import Skills from "./components/skills-component";
import Languages from "./components/languages-component";

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
        input:"",
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
        input:"",
        name: 'hobies',
        edit:false,
        items:[
          "Reading",
          "Technology"
        ]
      },
      languages:{
        input:"",
        name: 'hobies',
        edit:false,
        items:[
          "English",
          "Arabic",
          "French"
        ]
      }
    }

    this.editHandler = this.editHandler.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
    this.editSwitch = this.editSwitch.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
    
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

  editSwitch(e){
    const name = e.target.name
    Object.keys(this.state).map((item) => {
      if(item === name){
        this.setState({
          ...this.state,
          [name]:{
            ...this.state[name],
            edit:!this.state[name].edit,
            items: (this.state[name].input === '') ? this.state[name].items : [...this.state[name].items,this.state[name].input],
            input: ''
          }
        })
        
      }
    })
    
  }

  inputHandler(e){
    let name = e.target.name
    this.setState({
      ...this.state,
      [e.target.id]:{
        ...this.state[e.target.id],
        [name]:e.target.value

      }

    })
  }

  deleteHandler(e){
    console.log(e.target.id)
    let name = e.target.name
    this.state[name].items.splice(e.target.id,1)
    this.setState({
      ...this.state,
      [name]:{
        ...this.state[name],
        items:this.state[name].items
      }
    })
    console.log(this.state[name].items)
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
            <Info editHandler={this.editHandler} info={this.state.info} inputHandler={this.inputHandler} />
            <div className="divider skils"> Skills</div>
            <Skills skills={this.state.skills} editSwitch={this.editSwitch} inputHandler={this.inputHandler} deleteHandler={this.deleteHandler}/>
            <div className="divider lang"> Languages</div>
            <Languages languages={this.state.languages} editSwitch={this.editSwitch} inputHandler={this.inputHandler} deleteHandler={this.deleteHandler}/>
            <div className="divider hobies"> Hobies</div>
        </div>
        <div className="education-Experience"></div>
      </div>
    </div>
  );
}
}

export default App;
