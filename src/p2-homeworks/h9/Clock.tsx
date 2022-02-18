import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./Clock.module.css"

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        clearInterval(timerId)
        setTimerId(0)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const hours = new Date().getHours();
    const currentHours = hours < 10 ? '0' + hours : hours;
    const minutes = new Date().getMinutes();
    const currentMinutes = minutes < 10 ? '0' + minutes : minutes;
    const seconds = new Date().getSeconds();
    const currentSeconds = seconds < 10 ? '0' + seconds : seconds;

    const stringTime = `${currentHours}:${currentMinutes}:${currentSeconds}`

    const day = new Date().getDate()
    const monthIndex = new Date().getMonth()
    const month = +monthIndex + 1
    const year = new Date().getFullYear()
    const stringDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`

    return (
        <div className={s.mainContainer}>
            <div className={s.clockContainer}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>
            <div className={s.buttonsContainer}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock
