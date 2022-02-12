import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.norlamInput // need to fix with (?:)

    return (
        <div className={s.greetingContainer}>
            <div className={s.inputStr}>
                <input value={name} onChange={setNameCallback} className={inputClass}/>
                <button className={s.addButton} onClick={addUser}>add</button>
                <span>{totalUsers}</span>
            </div>
            <div className={s.errorText}>{error}</div>
        </div>
    )
}

export default Greeting
