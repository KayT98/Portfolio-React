import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    text-decoration: none;
  }
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ openBurger }) => openBurger ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform ease-in-out;
    a {
      color: white;
    }
  }
`;
const RightNav = ({openBurger}) => {
    return (
      <>
        <List openBurger={openBurger}>   
            <li><Link to="/">About Me</Link></li>  
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Me!</Link></li>
        </List>
       </> 
    )
} 

export default RightNav