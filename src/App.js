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
      App
    </div>

    {/*footer section */}
    <footer>
      <h3>Kay Truong &copy; <span>{copyRightYear()}</span>. &nbsp;All rights reserved. </h3>&nbsp;
      <h3> Written in React & CSS3.</h3>
    </footer>
      </>
  );
}
