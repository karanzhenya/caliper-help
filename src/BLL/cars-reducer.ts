import {Dispatch} from "redux";
import {api} from "../api/api";
import {changeIsLoading, setMessage} from "./app-reducer";
import {AxiosResponse} from "axios";

export type CarType = {
    _id: string,
    name: string
}
export type FetchData = {
    modelType: string,
    info: string,
    _car_id: string,
}

export type UpdateCarModelType = {
    data: FetchData
    modelId: string
}

export type InitialStateType = CarType[]
export type ActionsType = ReturnType<typeof setCarsAC>

const initialState = [] as InitialStateType
export const carsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-CARS": {
            return [...state = action.cars.sort((a, b) => a.name > b.name ? 1 : -1)]
        }
        default:
            return state
    }
}

export const setCarsAC = (cars: InitialStateType) => {
    return ({type: 'SET-CARS', cars} as const)
}

export const setCarsTC = () => (dispatch: Dispatch) => {
    api.getCars().then((res: AxiosResponse<InitialStateType>) => {
        dispatch(setCarsAC(res.data))
    })
}

export const sendCarDataTC = (data: FetchData) => (dispatch: Dispatch) => {
    const message = 'Спасибо, что отправили данные по ' + data.modelType + '. В ближайшее время добавлю информацию на сайт.'
    dispatch(changeIsLoading(true))
    const fetchData: FetchData = {
        modelType: data.modelType,
        info: data.info,
        _car_id: ''
    }
    api.sendCarData(fetchData).then(() => {
        dispatch(setMessage(message))
    })
        .catch((err) => {
            console.log(err)
        }).finally(() => {
        dispatch(changeIsLoading(false))
    })
}