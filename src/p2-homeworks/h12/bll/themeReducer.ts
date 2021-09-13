const initState: ThemesType = {
    theme: 'some',
} as const;

export type ThemesType = {
    theme: string
}

export const themeReducer = (state = initState, action: ActionChangeThemeType): ThemesType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme: action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => ({
    type: 'CHANGE-THEME',
    theme
}as const); // fix any

export type ActionChangeThemeType = ReturnType<typeof changeThemeC>