import React from 'react'
import Clock from './Clock'
import style from "./../../common/Common.module.css"
import s from "./PrivateStyles.module.css"

function HW9() {
    return (
        <div className={s.privateStyleForContainer}>
            <h2 className={style.commonHeader}>homeworks 9</h2>

            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    )
}

export default HW9
