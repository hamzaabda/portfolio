import React, { Component } from 'react';

class Resume extends Component {
  render() {
    let education = null;
    let experience = null;
    let skillmessage = "";
    let skills = null;

    if (this.props.data) {
      skillmessage = this.props.data.skillmessage;

      education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      experience = this.props.data.experience.map(function (experience) {
        return (
          <div key={experience.company}>
            <h3>{experience.company}</h3>
            <p className="info">
              {experience.title}
              <span>&bull;</span> <em className="date">{experience.years}</em>
            </p>
            <p>{experience.description}</p>
          </div>
        );
      });

      const allBadges = [
        // 💻 Programming Languages
        "https://img.shields.io/badge/C-00599C?style=flat&logo=c&logoColor=white",
        "https://img.shields.io/badge/C%23-239120?style=flat&logo=c-sharp&logoColor=white",
        "https://img.shields.io/badge/Java-ED8B00?style=flat&logo=java&logoColor=white",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white",
        "https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white",
        "https://img.shields.io/badge/Shell_Script-121011?style=flat&logo=gnu-bash&logoColor=white",

        // 🌐 Frontend
        "https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white",
        "https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white",
        "https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/jQuery-0769AD?style=flat&logo=jquery&logoColor=white",
        "https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white",

        // 🧠 Frameworks / Libs
        "https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white",
        "https://img.shields.io/badge/Symfony-000000?style=flat&logo=symfony&logoColor=white",
        "https://img.shields.io/badge/Laravel-FF2D20?style=flat&logo=laravel&logoColor=white",
        "https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white",
        "https://img.shields.io/badge/Angular.js-E23237?style=flat&logo=angularjs&logoColor=white",
        "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black",
        "https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white",
        "https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white",
        "https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white",
        "https://img.shields.io/badge/ASP.NET-5C2D91?style=flat&logo=dotnet&logoColor=white",
        "https://img.shields.io/badge/.Net-512BD4?style=flat&logo=dotnet&logoColor=white",
        "https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io&logoColor=white",
        "https://img.shields.io/badge/GraphQL-E10098?style=flat&logo=graphql&logoColor=white",
        "https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white",

        // 🧱 Databases
        "https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white",
        "https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white",
        "https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white",
        "https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white",
        "https://img.shields.io/badge/Neo4j-4581C3?style=flat&logo=neo4j&logoColor=white",

        // 📊 Data Science
        "https://img.shields.io/badge/Pandas-150458?style=flat&logo=pandas&logoColor=white",
        "https://img.shields.io/badge/NumPy-013243?style=flat&logo=numpy&logoColor=white",
        "https://img.shields.io/badge/Anaconda-44A833?style=flat&logo=anaconda&logoColor=white",

        // ⚙️ DevOps / Tools
        "https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white",
        "https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white",
        "https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black",
        "https://img.shields.io/badge/Jenkins-D24939?style=flat&logo=jenkins&logoColor=white",
        "https://img.shields.io/badge/Apache-D22128?style=flat&logo=apache&logoColor=white",
        "https://img.shields.io/badge/Maven-C71A36?style=flat&logo=apachemaven&logoColor=white",
        "https://img.shields.io/badge/NPM-CB3837?style=flat&logo=npm&logoColor=white",
        "https://img.shields.io/badge/Trello-0052CC?style=flat&logo=trello&logoColor=white",
        "https://img.shields.io/badge/Canva-00C4CC?style=flat&logo=canva&logoColor=white"
      ];

      skills = allBadges.map((url, index) => (
        <li key={index} style={{ display: 'inline-block', margin: '5px' }}>
          <img src={url} alt="skill badge" style={{ height: '25px' }} />
        </li>
      ));
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row experience">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
          <div className="nine columns main-col">{experience}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            <ul className="skills" style={{ listStyle: 'none', paddingLeft: 0 }}>
              {skills}
            </ul>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
