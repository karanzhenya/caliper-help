export type AppInitialStateType = {
    error: string
    message: string
    isLoading: boolean
}
export type ActionsType =
    ReturnType<typeof setMessage>
    | ReturnType<typeof changeIsLoading>
    | ReturnType<typeof setError>
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
        case "app/SET-ERROR": {
            return {...state, error: action.error}
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
export const setError = (error: string) => {
    return ({type: 'app/SET-ERROR', error} as const)
}
