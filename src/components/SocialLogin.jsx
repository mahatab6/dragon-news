import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-3xl font-medium items-center'>Login with</h1>
            <div className='p-2'>
                <button className='btn w-full mb-3'> <FaGoogle /> Login with Google</button>
                <button className='btn w-full'> <FaGithub /> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;