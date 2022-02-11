import React from 'react'
import s from './Message.module.css'
type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
function Message(props: MessagePropsType) {
    return (
        <div className={s.messageContainer}>
            <div className={s.avatar}>
                <img src={props.avatar} className={s.img} alt={'avatar'}/>
            </div>
            <div className={s.nameAndText}>
                <div>{props.name}</div>
                <div>{props.message}</div>
            </div>
            <div className={s.time}>{props.time}</div>
        </div>
    )
}

export default Message
