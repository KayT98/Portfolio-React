import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./rightNav";

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ openBurger }) => openBurger ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
        transform: ${({ openBurger }) => openBurger ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
        transform: ${({ openBurger }) => openBurger ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${({ openBurger }) => openBurger ? 0 : 1};
        }
        &:nth-child(3) {
        transform: ${({ openBurger }) => openBurger ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;


const Burger = () => {
    const [openBurger, setOpenBurger] = useState(false)
    const toggleBurger = () => {
        setOpenBurger(!openBurger)
    }
    return (
        <>
        <StyledBurger openBurger={openBurger} onClick={toggleBurger}>        
            <div />
            <div />
            <div />        
        </StyledBurger>
            <RightNav openBurger={openBurger} />
        </>    
    )
} 

export default Burger