import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import Leftaside from '../components/Leftaside';
import Rightaside from '../components/Rightaside';


const Homelayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto'>
                <LatestNews></LatestNews>
            </section>
            <section className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </section>
            <main className='w-11/12 mx-auto  grid grid-cols-12'>
                <aside className='col-span-3'>
                    <Leftaside></Leftaside>
                </aside>
                <section className='main-content col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <Rightaside></Rightaside>
                </aside>
            </main>
        </div>
    );
};

export default Homelayout;