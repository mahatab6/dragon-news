import React from 'react';
import Marquee from "react-fast-marquee";


const LatestNews = () => {
    return (
        <div className='flex  items-center gap-3 bg-base-300 px-3 py-2'>
            <p className='py-2 px-3 text-base-100 bg-[#D72050]'>Latest</p>
            <Marquee>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo temporibus quis maxime ullam quas veniam, necessitatibus praesentium maiores iusto quos id mollitia sed iste fuga voluptates corporis, aliquam quia sunt.</Marquee>
        </div>
    );
};

export default LatestNews;