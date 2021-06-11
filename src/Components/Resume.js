import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Educação</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Experiência</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Tecnologias</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>{skillmessage}</p>

          <div className="four columns">
            <img src="./images/techs/HTML-5-01.jpg"  alt="HTML" title="HTML"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/CSS-3-01.jpg"  alt="CSS" title="CSS"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/Bootstrap-01.jpg" alt="Bootstrap" title="Bootstrap"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/JavaScript-01.jpg"  alt="JavaScript" title="JavaScript"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/Node-JS-01.jpg"  alt="NodeJS" title="NodeJS"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/React-01.jpg"  alt="ReactJS" title="ReactJS"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/Git-06.jpg" alt="Git" title="Git"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/MySQL-01.jpg" alt="MySQL" title="MySQL"/>
          </div>

          <div className="four columns">
            <img src="./images/techs/Mongodb-03.jpg" alt="MongoDB" title="MongoDB"/>
          </div>
          
          

        </div>
      </div>
   </section>
    );
  }
}

export default Resume;
