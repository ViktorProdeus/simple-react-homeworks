import React from 'react'
import { AffairType } from './HW2'
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType 
    deleteAffairCallback: (_id: number) => void 
}

function Affair(props: AffairPropsType) {
    const onDeleteAffairClick = () => props.deleteAffairCallback(props.affair._id);

    const height = (props.affair.priority === 'high');
    const middle = (props.affair.priority === 'middle');
    const colorRed = (s.priority + ' ' + s.priorityRed);
    const colorOrange = (s.priority + ' ' + s.priorityOrange);
    const stylePriority = height ? colorRed : middle ? colorOrange : s.priority;

    return (
        <div className={s.Affair}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={stylePriority}>[{props.affair.priority}]</div>

            <button className={s.deleteBtn} onClick={onDeleteAffairClick}>X</button>
        </div>
    )
}

export default Affair
