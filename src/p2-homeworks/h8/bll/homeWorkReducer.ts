import {UserType} from "../HW8";

export type ActionsType = ActionSortType | ActionCheckType

type ActionSortType = {
    type: 'sort'
    payload: 'up' | 'down'
}

type ActionCheckType = {
    type: 'check'
    payload: 18
}


export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => {
    const copyState = [...state]
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                copyState.sort((a: UserType, b: UserType) => {
                    return a.name > b.name ? 1 : -1
                })
            }
            if (action.payload === 'down') {
                copyState.sort((a: UserType, b: UserType) => {
                    return a.name < b.name ? 1 : -1
                })
            }

            return copyState
        }
        case 'check': {
            return copyState.filter((user) => user.age > action.payload)
        }

        default:
            return state
    }
}