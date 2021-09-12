import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const get2digits = (number: number) => number >= 10 ? number : '0' + number

    const hours = get2digits(date.getHours())
    const minutes = get2digits(date.getMinutes())
    const seconds = get2digits(date.getSeconds())
    const currentDate = get2digits(date.getDate())
    const month = get2digits(date.getMonth() + 1)
    const year = date.getFullYear()

    const stringTime = `Time: ${hours}:${minutes}:${seconds}` //  date.toLocaleTimeString()
    const stringDate = `Date: ${currentDate}:${month}:${year}` // date.toDateString()

    const transition = `all 0.3s linear`
    const opacityShow = {opacity: 1, transition,}
    const opacityHide = {opacity: 0, transition,}

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>


            {show ?
                <div style={opacityShow}>
                    {stringDate}
                </div>
                :
                <div style={opacityHide}>
                    {stringDate}
                </div>
            }


            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock


