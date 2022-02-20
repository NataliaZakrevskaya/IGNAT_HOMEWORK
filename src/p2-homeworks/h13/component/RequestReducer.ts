import {Dispatch} from "redux";
import {RequestsAPI} from "../API/RequestsAPI";


const initialState = {
    success: false as boolean
}

type InitialStateType = typeof initialState

export const requestReducer = (state: InitialStateType = initialState, action: RequestActionsType): InitialStateType => {
    switch (action.type) {
        case 'REQUEST/SET-SUCCESS':
            return {...state, success: action.success}
        default:
            return state
    }
}

export type setSuccessACType = ReturnType<typeof setSuccessAC>
export const setSuccessAC = (success: boolean) => ({type: 'REQUEST/SET-SUCCESS', success} as const)


export const changeSuccessStatus = (success: boolean) => {
    return (dispatch: Dispatch) => {
        RequestsAPI.createRequest(success)
            .then((res) => {
                dispatch(setSuccessAC(success))
            })
    }
}


export type RequestActionsType = setSuccessACType