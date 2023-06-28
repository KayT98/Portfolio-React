import React from "react";
import styled from "styled-components";

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
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;
const RightNav = ({openBurger}) => {
    return (
        <List openBurger={openBurger}>
            <li><a href="#about">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#code">Coding Projects</a></li>
            <li><a href="#pts">Photoshop Projects</a></li>
            <li><a href="#contact">Contact Me!</a></li>
        </List>
    )
} 

export default RightNav