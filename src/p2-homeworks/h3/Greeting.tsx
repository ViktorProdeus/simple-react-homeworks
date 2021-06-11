import React, {KeyboardEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name: FocusEvent<HTMLInputElement>) => void // need to fix any
    onEnterPress: (name: KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnterPress} // деструктуризация пропсов
) => {
    const inputClass = name ? s.success : s.error // need to fix with (?:)

    return (
        <div className={s.wrapper}>

            <input value={name}
                   onFocus={setNameCallback}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onEnterPress}
            />
            <div className={s.textMistake}>{error}</div>


            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
