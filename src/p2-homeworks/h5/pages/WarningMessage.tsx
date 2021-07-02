import React from "react";
import s from "./Pages.module.css"
import {NavLink} from "react-router-dom";

type WarningMessageType = {
    pageTitle: string
}

function WarningMessage(props: WarningMessageType) {
    return (
        <div className={s.warningWrapper}>
            <h2>The page - <span className={s.warningTitle}>{props.pageTitle}</span> is being developed!!!</h2>

            Please return to

            <NavLink className={s.link} to='/pre-junior'> Start Page</NavLink>
        </div>
    )
}

export default WarningMessage;