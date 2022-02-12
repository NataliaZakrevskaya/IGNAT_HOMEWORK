import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./RoutesComponent";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.navLinkBlock}>
            <NavLink to={PATH.PRE_JUNIOR}><span className={s.links}>Pre-junior</span></NavLink>
            <NavLink to={PATH.JUNIOR}><span className={s.links}>Junior</span></NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}><span className={s.links}>Junior-plus</span></NavLink>
            <span>Links</span>
        </div>
    )
}

export default Header
