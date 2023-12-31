import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="md:min-h-[calc(100vh-100px)]">
                <Outlet></Outlet>
                <ScrollRestoration></ScrollRestoration>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;