import React, {ChangeEvent, useState} from "react";
import style from "./../../../common/Common.module.css"
import s from "../HW13.module.css"
import {RequestsAPI} from "../API/RequestsAPI";

export const Request = () => {

    const [success, setSuccess] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const onClickHandler = () => {
        RequestsAPI.createRequest(success)
            .then((res) => {
                setSuccess(success)
                setMessage(res.data.errorText)
            }).catch((err) => {
            console.log({err})
            setMessage(err.response ? err.response.data.errorText : err.message)
        })
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSuccess(e.currentTarget.checked)
    }

    return (
        <div className={s.mainContainer}>
            <h2 className={style.commonHeader}>HOMEWORK 13</h2>
            <button onClick={onClickHandler}>BUTTON</button>
            <input type={"checkbox"} checked={success} onChange={onChangeHandler}/>
            {message && <span>{message}</span>}
        </div>
    );
}

