import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from "./../../common/Common.module.css"
import s from "./PrivateStyles.module.css"

export type UserType = {
    _id: number
    name: string
    age: number
}

export const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)
    console.log(people)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={s.userString}>
            <span>{p.name}</span> <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'Up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'Down'}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div className={`${style.container} ${s.commonStyleForContainer}`}>
            <h2 className={style.commonHeader}>HOMEWORK 8</h2>

            <div>{finalPeople}</div>
            <div className={s.buttons}>
                <SuperButton className={s.filterButton} onClick={sortUp}>sort up</SuperButton>
                <SuperButton className={s.filterButton} onClick={sortDown}>sort down</SuperButton>
                <SuperButton className={s.filterButton} onClick={checkAge}>check 18</SuperButton>
            </div>

            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}

export default HW8
