import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: ChangeEvent<{}>, newValue: number[] | number) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <>
            <Slider color={"secondary"} style={{maxWidth: 125, marginRight: 10}}
                    value={value}
                    onChange={handleChange}
            />
        </>
    )
}

export default SuperDoubleRange
