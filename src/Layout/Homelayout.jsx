import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';


const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
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