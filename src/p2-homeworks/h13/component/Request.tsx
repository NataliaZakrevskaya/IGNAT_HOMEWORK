import React, {ChangeEvent, useState} from "react";
import style from "./../../../common/Common.module.css"
import s from "./../HW13.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {changeSuccessStatus, setSuccessAC} from "./RequestReducer";

export const Request = () => {

    const success = useSelector<AppStoreType, boolean>(state => state.request.success)
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(changeSuccessStatus(!success))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSuccessAC(e.currentTarget.checked))
    }

    return (
        <div className={s.mainContainer}>
            <h2 className={style.commonHeader}>HOMEWORK 13</h2>
            <button onClick={onClickHandler}>BUTTON</button>
            <input type={"checkbox"} checked={success} onChange={onChangeHandler}/>
        </div>
    );
}

