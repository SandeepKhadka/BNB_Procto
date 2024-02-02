import React from 'react'
import styled from 'styled-components';
import "../styles/Navbar.css"
import {Button} from '@mui/material'

const Nav = styled.div.attrs({ className: 'navbar' })`
    display: flex;
    justify-content: space-between;
    /* width: 100%; */
    height: 100%;
    margin-top: 10px;
    background-color: red;
`;


const NavLink = styled.div.attrs({ className: 'navlink' })`
    display: flex;
    justify-content: space-between;
    width: 30%;
    margin-right: 10%;
    align-items: center;
    background-color: green;
`;


const Navbar = () => {
    return (
        <Nav className='navbar'>
            <div>
                <img src="./images/logo.png" alt="" />
            </div>
            <NavLink className='navlink'>
                <div>
                    <span>Home</span>
                    <span>About Us</span>
                    <span>Blog</span>
                    <span>Contact</span>
                </div>
                <div>
                    <Button variant="outlined">Appointment</Button>
                </div>
            </NavLink>
        </Nav>
    )
}

export default Navbar