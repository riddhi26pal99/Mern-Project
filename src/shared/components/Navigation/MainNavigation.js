import React, { useState } from 'react'
import "./MainNavigation.css"
import { Link } from 'react-router-dom'

import MainHeader from './MainHeader'
import MenuIcon from '@material-ui/icons/Menu';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from "../UIElements/Backdrop"

function MainNavigation() {

    const [isDrawerOpen, setIsDrawerOpen] = useState(null);

    const openDrawerHandler = () => {
        setIsDrawerOpen(true);
    };

    const closeDrawerHandler = () => {
        setIsDrawerOpen(false);
    }

    return (
        <React.Fragment>
            {
                isDrawerOpen && <Backdrop onClick = {closeDrawerHandler} />
            }

            <SideDrawer show={isDrawerOpen} onClick = {closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks />
                </nav>
            </SideDrawer>

            <MainHeader>
                <button className="main-navigation__menu-btn" onClick = {openDrawerHandler} >
                    <MenuIcon />
                </button>

                <h1 className="main-navigation__title">
                    <Link to="/">Your Places</Link>
                </h1>

                <nav className="main-navigation__header-nav">
                    <NavLinks/>
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation
