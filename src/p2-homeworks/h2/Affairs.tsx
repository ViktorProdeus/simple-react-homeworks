import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all');
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');
    const allBtnActive = (props.filter === 'all') ? `${s.priorityBtn}  ${s.active}` : s.priorityBtn;
    const highBtnActive = (props.filter === 'high') ? `${s.priorityBtn}  ${s.active}` : s.priorityBtn;
    const middleBtnActive = (props.filter === 'middle') ? `${s.priorityBtn}  ${s.active}` : s.priorityBtn;
    const lowBtnActive = (props.filter === 'low') ? `${s.priorityBtn}  ${s.active}` : s.priorityBtn;


    return (
        <div>

            {mappedAffairs}

            <button className={allBtnActive} onClick={setAll}>All</button>
            <button className={highBtnActive} onClick={setHigh}>High</button>
            <button className={middleBtnActive} onClick={setMiddle}>Middle</button>
            <button className={lowBtnActive} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
