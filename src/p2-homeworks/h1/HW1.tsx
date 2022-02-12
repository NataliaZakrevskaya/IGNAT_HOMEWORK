import React from 'react'
import Message from "./Message";
import style from "./../../common/Common.module.css"
import AlternativeMessage from "./AlternativeMessage";

const messageData = [{
        avatar: 'https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/344/external-avatar-encryption-xnimrodx-lineal-color-xnimrodx.png',
        name: 'Masha Ivanova',
        message: 'Hello! How are you?)',
        time: '22:00',
    } ,
    {
    avatar: 'https://cdn-icons.flaticon.com/png/512/4113/premium/4113022.png?token=exp=1644688156~hmac=ff46e46d92c23131706166e0bdedd3ad',
    name: 'Lena Petrova',
    message: 'Good! How are you?)',
    time: '22:01',
}]
function HW1() {
    return (
        <div>
            <hr/>
            <h2 className={style.commonHeader}>HOMEWORK 1</h2>

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}
            />

            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData[1].avatar}
                name={messageData[1].name}
                message={messageData[1].message}
                time={messageData[1].time}
            />
            <hr/>
        </div>
    )
}

export default HW1
