import React, {ChangeEvent, useState} from "react";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import s from "../HW13.module.css";
import {requestAPI} from "./RequestAPI";

export const Request = () => {
    const [value, setValue] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const [isDisable, setIsDisable] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    const sendRequest = (message: string) => {
        setMessage('')
        setTimeout(() => {
            setMessage(message)
            setIsDisable(false)
        }, 0)
    }

    // const onButtonClick = () => {
    //     setIsDisable(true)
    //     requestAPI.post(value)
    //         .then(res => {
    //             sendRequest(res.data.errorText)
    //         })
    //         .catch(error => {
    //             sendRequest(error.response.data.errorText)
    //         })
    // }

    const onButtonClick = async () => {
        setIsDisable(true)
        try {
            let res = await requestAPI.post(value)
            sendRequest(res.data.errorText)
        } catch (error) {
            sendRequest(error.response.data.errorText)
        }
    }


    return (
        <>
            <h3>Request</h3>
            <label className={s.wrapper}>
                <SuperCheckbox onChange={onChangeHandler} className={s.checkbox} checked={value} disabled={isDisable}/>
                <p>Your response: <span className={message === '...всё ок)' ? s.green : s.red}>{message}</span></p>
            </label>

            <div>
                <SuperButton onClick={onButtonClick} disabled={isDisable}>send your request</SuperButton>
            </div>
        </>
    );
};
