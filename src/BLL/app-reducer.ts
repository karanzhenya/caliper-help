export type AppType = {
    error: string
    message: string
    isLoading: boolean
}

export type AppInitialStateType = AppType
export type ActionsType = ReturnType<typeof setMessage> | ReturnType<typeof changeIsLoading>
const initialState = {
    error: '',
    message: '',
    isLoading: false
}

export const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): AppInitialStateType => {
    switch (action.type) {
        case "app/SET-MESSAGE": {
            return {...state, message: action.message}
        }
        case "app/CHANGE-IS-LOADING": {
            return {...state, isLoading: action.status}
        }
        default:
            return state
    }
}

export const setMessage = (message: string) => {
    return ({type: 'app/SET-MESSAGE', message} as const)
}
export const changeIsLoading = (status: boolean) => {
    return ({type: 'app/CHANGE-IS-LOADING', status} as const)
}
