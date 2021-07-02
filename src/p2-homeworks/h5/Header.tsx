import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes"
import s from './H5.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    const [hidden, setHidden] = useState<boolean>(false)
    return (
        <div className={hidden ? s.wrapper : s.wrapperClose}>
            <nav className={s.nav}>
                <div className={s.navItem}>
                    <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.PRE_JUNIOR}>Pre-junior</NavLink>
                </div>
                <div className={s.navItem}>
                    <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.JUNIOR}>Junior</NavLink>
                </div>
                <div className={s.navItem}>
                    <NavLink className={s.link} activeClassName={s.activeLink} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                </div>
            </nav>

            {!hidden && <SuperButton
                className={''}
                onClick={() => setHidden(true)}
            >
                {'MENU'}
            </SuperButton>}

            {hidden && <SuperButton
                red
                className={s.closeBtn}
                onClick={() => setHidden(false)}
            >
                {'X'}
            </SuperButton>}
        </div>
    )
}

export default Header
