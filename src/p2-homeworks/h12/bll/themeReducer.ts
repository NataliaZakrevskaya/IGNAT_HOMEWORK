const initState = {
    theme: 'some'
};

type InitStateType = {
    theme: string
}

export const themeReducer = (state: InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case 'SET-THEME': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type changeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: 'dark'| 'red' | 'some') => {
    return {type: 'SET-THEME', theme} as const
};

type ActionType = changeThemeCType