const initState = {
isLoading: false as boolean
}

type InitStateType = typeof initState;



export const loadingReducer = (state: InitStateType = initState, action: LoadingReducerType): InitStateType => {
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading} as const
}

export type LoadingReducerType = loadingACType
export type loadingACType = ReturnType<typeof loadingAC>