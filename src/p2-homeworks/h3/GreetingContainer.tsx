import React, {useState, KeyboardEvent, FocusEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: FocusEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError('')
    }

    const addUser = () => {
        const valueNameTrim = name.trim()

        if(valueNameTrim) {
            addUserCallback(valueNameTrim)
            alert(`Hello  ${valueNameTrim}!`)

        } else{
            setError('Enter text')
        }

        setName('')
    }
    const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') addUser()
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnterPress={onEnterPress}
        />
    )
}

export default GreetingContainer
