import { Component } from "react";
import "./styling/App.css"
import Info from "./components/info-component";
import Skills from "./components/skills-component";
import Languages from "./components/languages-component";
import Hobies from "./components/hobies-component";
import Presentation from "./components/presentation-component";
import Experience from "./components/experience-component";
import Educations from "./components/education-component";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      info:{
        edit:false,
        phone:"0690008290",
        email:"otman.elkantaoui@gmail.com",
        adress: "82adress,safi,morocco",
        

      },
      presentation:{
        edit:false,
        name: "Othmane Elkantaoui",
        aboutMe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
      },
      experiences:{
        inputName:'',
        inputDescription:'',
        name: 'experiences',
        edit:false,
        items:[
          {
            name:"Manger",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            name:"Manger",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        ]
      },
      educations:{
        inputName:'',
        inputDescription:'',
        name: 'educations',
        edit:false,
        items:[
          {
            name:"School1",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            name:"School2",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        ]
      }
    }

    this.editHandler = this.editHandler.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
    this.editSwitch = this.editSwitch.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
    this.preSwitch = this.preSwitch.bind(this)
    
  }
 
  editHandler(e){
    let name = e.target.name
    this.setState({
      [name]:{
        ...this.state[name],
        edit:!this.state[name].edit,
        
      }

    })
  }

  editSwitch(e){
    const name = e.target.name
    console.log(name)

    this.setState({
      [name]:{
        ...this.state[name],
        edit:!this.state[name].edit,
        items:(this.state[name].input === '' )? this.state[name].items : [...this.state[name].items, this.state[name].input],
        input:''
      }
    })
    
    
  }

  
  preSwitch(e){
    let name = e.target.name
    let input = {
      name:this.state[name].inputName,
      description:this.state[name].inputDescription
    }
    
    this.setState({
      [name]:{
        ...this.state[name],
        edit:!this.state[name].edit,
        items:(this.state[name].inputName === ''|| this.state[name].inputDescription === '' )? this.state[name].items : [...this.state[name].items, input],
        inputName:'',
        inputDescription:''
      }
    })
  }


  inputHandler(e){
    let name = e.target.name
    this.setState({
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
            <Hobies hobies={this.state.hobies} inputHandler={this.inputHandler} editSwitch={this.editSwitch} deleteHandler={this.deleteHandler}/>
        </div>
        <div className="education-Experience">
              <div className="presentation">
              <Presentation editHandler={this.editHandler} presentation={this.state.presentation} inputHandler={this.inputHandler} />
              </div>
              <div className="divider2 experience"> Experience</div>
              <Experience experiences={this.state.experiences} inputHandler={this.inputHandler} deleteHandler={this.deleteHandler} preSwitch={this.preSwitch}/>
              <div className="divider2 education"> Education</div>
              <Educations educations={this.state.educations} inputHandler={this.inputHandler} deleteHandler={this.deleteHandler} preSwitch={this.preSwitch}/>


        </div>
      </div>
    </div>
  );
}
}

export default App;
