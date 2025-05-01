import React from 'react';
import swimming from '../assets/swimming.png'
import classs from '../assets/class.png'
import play from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='my-5 bg-base-200 p-5'>
            <h1 className='text-2xl font-bold '>Q-Zone</h1>

            <div className='justify-items-center space-y-2'>
                <img src={swimming} alt="" />
                <img src={classs} alt="" />
                <img src={play} alt="" />
            </div>
        </div>
    );
};

export default Qzone;