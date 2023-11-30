import React from "react";
import NavBar from "./components/burgerNav/Navbar";
import Skills from "./intro/Skills.js"
import Projects from "./intro/Projects.js"
import Contact from "./intro/Contact.js"
import About from "./intro/About.js"
import { Route, Routes } from 'react-router-dom'
import './Styles/mainStyles.css'

export default function App() {

  const copyRightYear = () => {
    return new Date().getFullYear()
  }
  return (
    <>
    <div className="App">

      <NavBar />
      <Routes>
          <Route path="/" element={<About />}/>
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
    </Routes>
    </div>

    {/*footer section */}
    <footer>
      <h3>Kay Truong &copy; <span>{copyRightYear()}</span>. &nbsp;All rights reserved. </h3>&nbsp;
      <h3> Written in React & CSS3.</h3>
    </footer>
      </>
  );
}
