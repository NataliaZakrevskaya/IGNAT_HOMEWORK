import React from 'react'
import Clock from './Clock'
import style from "./../../common/Common.module.css"

function HW9() {
    return (
        <div>
            <h2 className={style.commonHeader}>HOMEWORK 9</h2>

            {/*should work (должно работать)*/}
            <Clock/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
        </div>
    )
}

export default HW9
