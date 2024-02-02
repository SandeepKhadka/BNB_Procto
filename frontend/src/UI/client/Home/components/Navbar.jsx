import React from 'react'
import styled from 'styled-components';
import "../styles/Navbar.css"
import {Button} from '@mui/material'

const Nav = styled.div.attrs({ className: 'navbar' })`
    display: flex;
    justify-content: space-between;
    align-items:center;
     width: 100%; 
    height: 100px;
    margin-top: 10px;
    
    
`;


const NavLink = styled.div.attrs({ className: 'navlink' })`
    display: flex;
    justify-content: space-between;
    
    width: 35%;
    margin-right: 5%;
    align-items: center;
    
`;


const Navbar = () => {
    return (
        <Nav className='navbar'>
            <div>
                <img src="./images/logo.png" alt="" style={{width: '70%',marginTop:15}}/>
            </div>
            <NavLink className='navlink'>
                <div > 
                    <span>Home</span>
                    <span>AboutUs</span>
                    <span>Blog</span>
                    <span>Contact</span>
                </div>
                <div>
                    <Button variant="outlined" style={{borderRadius:'16px',border:'2px solid #4D72D0',textTransform:'none',color:'#4D72D0'}}>Appointment</Button>
                </div>
            </NavLink>
        </Nav>
    )
}

export default Navbar