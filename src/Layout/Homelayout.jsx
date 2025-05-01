import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';


const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <main>
                <section className='left-content'></section>
                <section className='main-content'>
                    <Outlet></Outlet>
                </section>
                <section className='right-content'></section>
            </main>
        </div>
    );
};

export default Homelayout;