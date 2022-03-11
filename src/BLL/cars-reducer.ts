import {Dispatch} from "redux";
import {fetchCars} from "../promiseCars";
import {api} from "../api/api";
import {DataType} from "../App";
import {changeIsLoading, setMessage} from "./app-reducer";

export type ModelType = {
    id: string,
    type: string,
    info: string
}
export type CarType = {
    id: string,
    name: string,
    models: ModelType[],
}

export type InitialStateType = Array<CarType>
export type ActionsType = ReturnType<typeof setCarsAC>

const initialState = [] as InitialStateType
export const carsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-CARS": {
            let stateCopy = [...state]
            stateCopy = action.cars
            return stateCopy
        }
        default:
            return state
    }
}

export const setCarsAC = (cars: InitialStateType) => {
    return ({type: 'SET-CARS', cars} as const)
}

export const setCarsTC = () => (dispatch: Dispatch) => {
    fetchCars.then((res: InitialStateType) => {
        dispatch(setCarsAC(res))
    }).catch((err) => {
        console.log(err)
    })
}

export const sendCarDataTC = (data: DataType) => (dispatch: Dispatch) => {
    const message = 'Спасибо, что отправили данные по ' + data.car + '. В ближайшее время добавлю информацию на сайт.'
    dispatch(changeIsLoading(true))
    api.sendCarData(data).then(() => {
        dispatch(setMessage(message))
    })
        .catch((err) => {
            console.log(err)
        }).finally(() => {
        dispatch(changeIsLoading(false))
    })
}