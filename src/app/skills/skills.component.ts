import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      name: "HTML5",
      logo: '../../assets/Skill Logos/HTML5.png',
      No_of_Stars: 5,
      skill_category: "WT"
    },
    {
      name: "CSS3",
      logo: '../../assets/Skill Logos/CSS3.png',
      No_of_Stars: 5,
      skill_category: "WT"
    },
    {
      name: "SCSS",
      logo: '../../assets/Skill Logos/SCSS.png',
      No_of_Stars: 3,
      skill_category: "WT"
    },
    {
      name: "JavaScript",
      logo: '../../assets/Skill Logos/JS.png',
      No_of_Stars: 5,
      skill_category: "WT"
    },
    {
      name: "Angular",
      logo: '../../assets/Skill Logos/Angular.png',
      No_of_Stars: 5,
      skill_category: "FW"
    },
    {
      name: "TypeScript",
      logo: '../../assets/Skill Logos/TS.png',
      No_of_Stars: 5,
      skill_category: "WT"
    },
    {
      name: "JSON",
      logo: '../../assets/Skill Logos/JSON.webp',
      No_of_Stars: 5,
      skill_category: "WT"
    },
    {
      name: "Bootstrap",
      logo: '../../assets/Skill Logos/Bootstrap.svg',
      No_of_Stars: 3,
      skill_category: "WT"
    },
    {
      name: "Python",
      logo: '../../assets/Skill Logos/python.png',
      No_of_Stars: 3,
      skill_category: "WT"
    },
    {
      name: "C",
      logo: '../../assets/Skill Logos/C.png',
      No_of_Stars: 4,
      skill_category: "WT"
    },
    {
      name: "C++",
      logo: '../../assets/Skill Logos/C++.png',
      No_of_Stars: 3,
      skill_category: "WT"
    },
    {
      name: "Java",
      logo: '../../assets/Skill Logos/JAVA.png',
      No_of_Stars: 4,
      skill_category: "WT"
    },
    {
      name: "C#",
      logo: '../../assets/Skill Logos/CSharp.png',
      No_of_Stars: 3,
      skill_category: "WT"
    },
    {
      name: "ASP.NET",
      logo: '../../assets/Skill Logos/ASP.png',
      No_of_Stars: 3,
      skill_category: "FW"
    },
    {
      name: "Node.js",
      logo: '../../assets/Skill Logos/Nodejs.png',
      No_of_Stars: 3,
      skill_category: "WT"
    },
    {
      name: "Tailwind CSS",
      logo: '../../assets/Skill Logos/TailwindCSS.png',
      No_of_Stars: 5,
      skill_category: "WT"
    },
    {
      name: "MySQL",
      logo: '../../assets/Skill Logos/Mysql.png',
      No_of_Stars: 5,
      skill_category: "DB"
    },
    {
      name: "PostgreSQL",
      logo: '../../assets/Skill Logos/PSQL.png',
      No_of_Stars: 2,
      skill_category: "DB"
    },
    {
      name: "Firebase",
      logo: '../../assets/Skill Logos/Firebase.png',
      No_of_Stars: 5,
      skill_category: "DB"
    },
    {
      name: "Git",
      logo: '../../assets/Skill Logos/Git.png',
      No_of_Stars: 4,
      skill_category: "OT"
    },
    {
      name: "Git Hub",
      logo: '../../assets/Skill Logos/Github.png',
      No_of_Stars: 5,
      skill_category: "OT"
    },
    {
      name: "Git Lab",
      logo: '../../assets/Skill Logos/Gitlab.webp',
      No_of_Stars: 5,
      skill_category: "OT"
    },
    {
      name: "Figma",
      logo: '../../assets/Skill Logos/Figma.png',
      No_of_Stars: 5,
      skill_category: "OT"
    },
    {
      name: "Adobe XD",
      logo: '../../assets/Skill Logos/AdobeXD.png',
      No_of_Stars: 4,
      skill_category: "OT"
    },
    {
      name: "Visual Studio",
      logo: '../../assets/Skill Logos/VisualStudio.png',
      No_of_Stars: 4,
      skill_category: "IDE"
    },
    {
      name: "Visual Studio Code",
      logo: '../../assets/Skill Logos/VSCode.png',
      No_of_Stars: 4,
      skill_category: "IDE"
    },
    {
      name: "Eclipse",
      logo: '../../assets/Skill Logos/Eclipse.png',
      No_of_Stars: 4,
      skill_category: "IDE"
    },
  ]
  popup = false;
  popupAction() {
    this.popup = !this.popup;
  }
}
