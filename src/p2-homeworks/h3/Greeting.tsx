import React, {KeyboardEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (name: FocusEvent<HTMLInputElement>) => void
    onEnterPress: (name: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.success
    const isTextMistake = error ? s.textMistake : s.textMistakeNone

    return (
        <div className={s.wrapper}>

            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onEnterPress}
            />
            <div className={isTextMistake}>Title is required!</div>


            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
