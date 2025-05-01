import React from 'react';
import SocialLogin from './SocialLogin';
import SocialFind from './SocialFind';
import Qzone from './Qzone';
import Ads from './Ads';

const Rightaside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <SocialFind></SocialFind>
            <Qzone></Qzone>
            <Ads></Ads>
        </div>
    );
};

export default Rightaside;