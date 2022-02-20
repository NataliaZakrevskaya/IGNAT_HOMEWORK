import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    // const theme = 'red'; // useSelector
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme) // useSelector

    const dispatch = useDispatch()

    const onChangeCallback = (themeValue: 'dark' | 'red' | 'some') => {
        dispatch(changeThemeC(themeValue))
    }

    return (
        <div className={s[theme]}>
            <h2 className={s[theme + '-text']}>
                HOMEWORK 12
            </h2>
            <SuperSelect
            options={themes}
            value={theme}
            onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

        </div>
    );
}

export default HW12;
