import {initialPeople, UserType} from "../HW8";


type ActionType = ReturnType<typeof checkAgeAC>
    | ReturnType<typeof sortUpAC>
    | ReturnType<typeof sortDownAC>

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'Up') {
                return state.slice().sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1)
            }
            return state.slice().sort((a: UserType, b: UserType) => a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(u => u.age > action.payload)
        }
        default:
            return state
    }
}

export const checkAgeAC = (payload: number) => {
    return {type: 'check', payload} as const
}
export const sortUpAC = (payload: string) => {
    return {type: 'sort', payload} as const
}
export const sortDownAC = (payload: string) => {
    return {type: 'sort', payload} as const
}