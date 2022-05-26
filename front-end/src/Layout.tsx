import React from 'react';
import {Outlet} from "react-router-dom";
import './App.css';
import {MutedP} from "./config/MyStyledComponents";

function Layout() {
    return <>
        <MutedP size={2} center={true}>CARTOON inspired glass-morphic employee list </MutedP>
        <Outlet/>
    </>
}

export default Layout;
