import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>

            <div className={s.affairName}>{props.affair.name}</div>
            <div className={s.priority}>{props.affair.priority}</div>
            <button className={s.affairButton} onClick={deleteCallback}>DELETE</button>

        </div>
    )
}

export default Affair
