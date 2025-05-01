import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";




const SocialFind = () => {
    return (
        <div>
            <h1 className='text-3xl font-medium items-center pt-7 items-center'>Find Us On</h1>
            <div className="join join-vertical w-full ">
                <button className="btn p-2 bg-white  join-item"><FaFacebook />Facebook</button>
                <button className="btn p-2 bg-white join-item"><FaTwitter />Twitter</button>
                <button className="btn p-2 bg-white join-item"><FaYoutube />Youtube</button>
            </div>
        </div>
    );
};

export default SocialFind;