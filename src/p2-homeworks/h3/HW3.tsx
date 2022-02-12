import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import style from "../../common/Common.module.css";

// types
export type UserType = {
    _id: string
    name: string
}
export type UsersType = Array<UserType>

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UsersType>([])

    const addUserCallback = (name: string) => {
        let newUser = {_id: v1(), name: name}
        setUsers([newUser, ...users])
    }

    return (
        <div  className={style.container}>

            <h2 className={style.commonHeader}>HOMEWORK 3</h2>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
        </div>
    )
}

export default HW3
