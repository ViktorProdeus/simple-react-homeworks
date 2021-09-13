import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC, ThemesType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.themes.theme); // useSelector
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback


    const onChangeCallback = (currentTheme: string) => {
        dispatch(changeThemeC(currentTheme as ThemesType))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div style={{minHeight: 150, margin: 30}}>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />

                <SuperRadio
                    name={'radio'}
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
