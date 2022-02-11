import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.affairContainer}>
            <div>
           <span>{`${props.affair.name}    `}</span>
            <span>{props.affair.priority}</span>
            </div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
