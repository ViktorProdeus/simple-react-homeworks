import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>

            <div className={s.message}>
                <h3 className={s.avatarName}>{props.name}</h3>
                <p className={s.messageText}>{props.message}</p>
                <time className={s.messageTime}>{props.time}</time>
            </div>
        </div>
    )
}

export default Message
