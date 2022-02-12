import React from 'react'
import s from "./AlternativeMessage.module.css";
import {MessagePropsType} from "./Message";

function AlternativeMessage(props: MessagePropsType) {
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

export default AlternativeMessage
