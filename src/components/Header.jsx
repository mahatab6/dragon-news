import React from 'react';
import logo from '../assets/logo.png'
import {format } from "date-fns";


const Header = () => {
    return (
        <div className='flex flex-col items-center pt-12'>
            <img className='w-[350px]' src={logo} alt="" />
            <h1 className='text-base font-medium pt-5 pb-3'>Journalism Without Fear or Favour</h1>
            <p className='text-xl font-medium pb-5'>{format(new Date(),'EEEE, MMMM d, yyyy')}</p>
        </div>
    );
};

export default Header;