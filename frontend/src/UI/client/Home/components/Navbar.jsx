import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Appointment from './Appointment';
import logo from '../../../../../public/images/logo.png';

const Nav = styled.div.attrs({ className: 'navbar' })`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-top: 10px;
    padding: 0 5% 0 5%;
`;

const NavLinkWrapper = styled.div.attrs({ className: 'navlink' })`
    display: flex;
    justify-content: space-between;
    width: 35%;
    margin-right: 5%;
    align-items: center;

    & a {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease;
    }

    & a:hover {
        color: #a0a0a0; /* Lighter color on hover */
    }
`;

const NavList = styled.div.attrs({ className: 'navlist' })`
  cursor: pointer;

  & span {
    margin-left: 32px;
    font-weight: normal;
  }

  & .active span {
    font-weight: bold;
  }
`;

const Navbar = () => {
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

    const toggleAppointmentPopup = () => {
        setIsAppointmentOpen(!isAppointmentOpen);
    };

    return (
        <Nav className='navbar'>
            <div>
                <img src={logo} alt="" style={{ width: '70%' }} />
            </div>
            <NavLinkWrapper className='navlink'>
                <NavList className='navlist'>
                    <NavLink to="/" activeClassName="active">
                        <span>Home</span>
                    </NavLink>
                    <span>AboutUs</span>
                    <NavLink to="/blog" activeClassName="active">
                        <span>Blog</span>
                    </NavLink>
                    <span>Contact</span>
                </NavList>
                <div>
                    <Button variant="outlined" style={{ borderRadius: '16px', border: '2px solid #4D72D0', textTransform: 'none', color: '#4D72D0' }} onClick={toggleAppointmentPopup}>Appointment</Button>
                    <Modal open={isAppointmentOpen} onClose={toggleAppointmentPopup}>
                        <div>
                            <Appointment onClose={toggleAppointmentPopup} />
                        </div>
                    </Modal>
                </div>
            </NavLinkWrapper>
        </Nav>
    );
}

export default Navbar;
