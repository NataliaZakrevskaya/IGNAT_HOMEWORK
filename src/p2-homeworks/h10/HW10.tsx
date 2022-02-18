import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {CircularProgress} from "@mui/material";
import style from "../../common/Common.module.css";
import s from "./Preloader.module.css"


function HW10() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
         dispatch(loadingAC(true))
        setTimeout(() => {dispatch(loadingAC(false))}, 3000)
        console.log('loading...')
    };

    return (
        <div className={s.mainContainer}>
            <h2 className={style.commonHeader}>HOMEWORK 10</h2>


            {/*should work (должно работать)*/}

            {isLoading
                ? (
                    <CircularProgress />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
