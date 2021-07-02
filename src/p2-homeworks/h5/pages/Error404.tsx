import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Pages.module.css"

function Error404() {
    return (
        <div className={s.warningWrapper}>
            <div className={s.warningTitle}>404</div>
            <div>
                Page not found!
                Please return to

                <NavLink className={s.link} to='/pre-junior'> Start Page</NavLink>
            </div>
        </div>
    )
}

export default Error404
