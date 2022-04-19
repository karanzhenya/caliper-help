import {Dispatch} from "redux";
import {api} from "../api/api";
import {AxiosResponse} from "axios";
import {setError} from "./app-reducer";

export type CarSpecType = {
    _id: string,
    type: string,
    info: string
}

export type InitialStateType = CarSpecType[]
export type ActionsType = ReturnType<typeof setCarSpecsAC>

const initialState = [] as InitialStateType
export const carSpecsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-CAR-SPECS": {
            let stateCopy = [...state]
            stateCopy = action.carSpecs
            return stateCopy
        }
        default:
            return state
    }
}

export const setCarSpecsAC = (carSpecs: InitialStateType) => {
    return ({type: 'SET-CAR-SPECS', carSpecs} as const)
}

export const setCarSpecsTC = (id: string) => (dispatch: Dispatch) => {
    api.getCarSpecs(id).then((res: AxiosResponse<InitialStateType>) => {
        dispatch(setCarSpecsAC(res.data))
    })
}

export const setFindedCarSpecs = (type: string) => (dispatch: Dispatch) => {
    api.findCarSpecsByType(type).then((res: AxiosResponse<InitialStateType>) => {
        if (res.data.length < 1) {
            dispatch(setError('Not found'))
        }
        else {
            dispatch(setError(''))
            dispatch(setCarSpecsAC(res.data))
        }
    })
}
