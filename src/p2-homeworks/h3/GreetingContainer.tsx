import React, {useState} from 'react'
import Greeting from './Greeting'
import {UsersType} from "./HW3";

type GreetingContainerPropsType = {
    users: UsersType
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        let newName = e.currentTarget.value
        setName(newName.trim())
    }
    const addUser = () => {
        if (name !== '') {
            setError(null)
            addUserCallback(name)
            alert(`Hello ${name} !`)
        } else {
            setError('Enter valid name, please')
        }
        setName('')
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
