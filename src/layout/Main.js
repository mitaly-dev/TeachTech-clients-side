import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import Topbar from '../Pages/Shared/Topbar';

const Main = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;