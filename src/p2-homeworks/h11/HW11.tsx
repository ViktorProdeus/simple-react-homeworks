import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "./HW11.module.css"

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeSuperRange = (value: number) => {
        setValue1(value)
    }

    const onChangeSuperDoubleRange = (value: number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.wrapper}>
                <span className={s.value}>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={onChangeSuperRange}

                    // сделать инпут контролируемым
                    value={value1}
                />
            </div>

            <div className={s.wrapper}>
                <span className={s.value}>{value1}</span>
                <SuperDoubleRange
                    // сделать инпут контролируемым
                    value={[value1, value2]}

                    // сделать так чтоб value1 и value2 изменялось
                    onChangeRange={onChangeSuperDoubleRange}
                />
                <span className={s.value}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
