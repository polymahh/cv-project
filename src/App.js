import React , { useState } from "react";
import "./styling/App.css"
import Info from "./components/info-component";
import Skills from "./components/skills-component";
import Languages from "./components/languages-component";
import Hobies from "./components/hobies-component";
import Presentation from "./components/presentation-component";
import Experience from "./components/experience-component";
import Educations from "./components/education-component";

export default function App (props) {
 
    let params = {
      info:{
        edit:false,
        phone:"0690008290",
        email:"otman.elkantaoui@gmail.com",
        adress: "82adress,safi,morocco",
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
      
      presentation:{
        edit:false,
        name: "Othmane Elkantaoui",
        aboutMe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
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
        name: 'languages',
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
            <Info info={params.info} />
            <div className="divider skils"> Skills</div>
            <Skills skills={params.skills} />
            <div className="divider lang"> Languages</div>
            <Languages languages={params.languages}/>
            <div className="divider hobies"> Hobies</div>
            <Hobies hobies={params.hobies}/>
        </div>
        <div className="education-Experience">
              <div className="presentation">
              <Presentation  presentation={params.presentation}/>
              </div>
              <div className="divider2 experience"> Experience</div>
              <Experience experiences={params.experiences} />
              <div className="divider2 education"> Education</div>
              <Educations educations={params.educations}/>


        </div>
      </div>
    </div>
  );
}



