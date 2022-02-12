import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairsType, AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'


type AffairsPropsType = { // need to fix any
    data: AffairsType
    setFilter: Dispatch<SetStateAction<FilterType>>
    filter: FilterType
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.affairContainer}>
            <div>
                {mappedAffairs}
            </div>
            <div className={s.buttons}>
                <button className={props.filter === 'all' ? s.activeFilterButton : s.filterButton} onClick={setAll}>All</button>
                <button className={props.filter === 'high' ? s.activeFilterButton : s.filterButton} onClick={setHigh}>High</button>
                <button className={props.filter === 'middle' ? s.activeFilterButton : s.filterButton} onClick={setMiddle}>Middle</button>
                <button className={props.filter === 'low' ? s.activeFilterButton : s.filterButton} onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
