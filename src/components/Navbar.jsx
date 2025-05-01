import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'


const Navbar = () => {
    return (
        <div className='flex justify-around items-center py-3'>
            <div></div>
            <div className='nav flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
                
            </div>
            <div className='flex gap-2'>
                <img src={user} alt="" />
                <button className='btn text-white bg-[#1E1E1E] py-3 px-2'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;