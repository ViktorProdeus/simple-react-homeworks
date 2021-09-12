const initState: InitStateType = {
    isLoading: false
}

type InitStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case 'SHOW-IS-LOADING': {

            return {...state, isLoading: action.isLoading}
        }

        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {type: 'SHOW-IS-LOADING', isLoading} as const
}

export type ActionsType = ReturnType<typeof loadingAC>