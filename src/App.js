import React from "react";
import NavBar from "./components/burgerNav/Navbar";

export default function App() {

  const copyRightYear = () => {
    return new Date().getFullYear()
  }
  return (
    <>
    <div className="App">
     <NavBar />
      <div>
        <h1>Hello! My name is Kay Truong</h1>
        <h2>I&apos;m a Front End Developer at Seminaut Inc</h2>
        <p>I graduated from Northeastern State University in Oklahoma, Spring 2022. I&apos;m a hardworking and passionate job seeker with strong organizational skills, with experience in HTML5 & CSS3, JavaScript(ES6), Front End Development and UI Design. Currently, I am working as an intern at Seminaut Inc, 
        where I am gaining valuable experience in software engineering and website development. In my spare time, I am currently focusing on learning new programming languages such as Python, C# and Java, as well as exploring the possibilities of Next.js. 
        I believe that these skills will help me to pursue better opportunities in the future and stay ahead in this constantly evolving industry. 
        Highly motivated and bilingual in Vietnamese and English. Ready and willing to learn anything new to help the team achieve company goals. Superior work ethic and good teamwork, problem solving and organizational skills. 
        I am deeply passionate and excited to see where my passion for software engineering and website development will take me in the future, 
        and I look forward to making a positive impact in the field.
        </p>
      </div>


      <div>
        <a href='Kay Truong Resume.pdf' download><button>Download my resume</button></a>
      </div>
      
      <h1>Skills</h1>
        <div>  
          <ul>     
          <li>•	Working knowledge: HTML5, CSS3, Javascript(ES6), React, Git, TailwindCSS, VS Code, UI Development, Frontend Development, Responsive Web Development, Github, Clickup, Microsoft SQL Server, Gitlab, Microsoft Visual Studio. </li>
          <li>•	Familiar with: SQL/MYSQL, Bootstrap5, NextJS 13, XML, JSON, JQuery, C#, Python, OOP, Typescript, WordPress, Figma, Microsoft Office, SDLC, Photoshop, SEO.</li>
          <li>•	Soft skills: Time Management, Creative Thinking, Teamwork, Responsibility, Ability to work under pressure and independently, Flexibility, Problem Solving, Excellent Verbal & Written Communication, Work Ethic, Attention To Detail, Adaptability.</li>
          </ul>     
        </div>
      
    </div>


    {/*footer section */}
    <footer>
      <h3>Kay Truong &copy; <span>{copyRightYear()}</span>. &nbsp;All rights reserved. </h3>&nbsp;
      <h3> Written in React & CSS3.</h3>
    </footer>
      </>
  );
}
