const CHANGE_THEME = typeof 'theme/CHANGE-THEME'

const initState = {
    theme: 'some' as ThemesType,
};

type InitStateType = typeof initState

export type ThemesType = 'some' | 'red' | 'dark'


export const themeReducer = (state: InitStateType = initState, action: ActionChangeThemeType): InitStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemesType) => ({
    type: CHANGE_THEME,
    theme
}); // fix any

export type ActionChangeThemeType = ReturnType<typeof changeThemeC>