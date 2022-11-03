import React from 'react';
import "./Nav.scss"
import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom';
import '../../styles/variables.scss'



const Nav = () => {
    return (
        <nav className='Nav-container'>
            <div className='logo-container'>
            <figure className='img-container'><img src={logo} alt="" /></figure>
            <h1 className='logo-text'>MUSIC MANAGER</h1>
            <figure className='logo-underline'></figure>
            </div>

            <ul className='nav-items-container'>

            <NavLink className='nav-item' to="/" style={({ isActive }) => (isActive ? {backgroundColor: '#1D4C78' } : {backgroundColor: 'none'})}>DASHBOARD</NavLink>
            <NavLink className='nav-item' to="/inbox" style={({ isActive }) => (isActive ? {backgroundColor: '#1D4C78' } : {backgroundColor: 'none'})}>INBOX</NavLink>
            <NavLink className='nav-item' to="/calender" style={({ isActive }) => (isActive ? {backgroundColor: '#1D4C78' } : {backgroundColor: 'none'})}>CALENDER</NavLink>
            <NavLink className='nav-item' to="/contacts" style={({ isActive }) => (isActive ? {backgroundColor: '#1D4C78' } : {backgroundColor: 'none'})}>CONTACTS</NavLink>
            <NavLink className='nav-item' to="/artist" style={({ isActive }) => (isActive ? {backgroundColor: '#1D4C78' } : {backgroundColor: 'none'})}>ARTIST</NavLink>
            <NavLink className='nav-item' to="/band" style={({ isActive }) => (isActive ? {backgroundColor: '#1D4C78' } : {backgroundColor: 'none'})}>BAND</NavLink>
            
                
            </ul>

            <div className='nav-account-container'>

            </div>
        </nav>
    );
};

export default Nav;