import {Dispatch} from "redux";
import {api} from "../api/api";
import {AxiosResponse} from "axios";
import {changeIsLoading, setError} from "./app-reducer";
import {FetchData} from "./cars-reducer";
import {NewModelType} from "../common/AddNewModelForm/AddNewModelForm";

export type CarSpecType = {
    _id: string,
    modelType: string,
    info: string,
    _car_id: string
}

export type InitialStateType = CarSpecType[]
export type ActionsType = ReturnType<typeof setCarSpecsAC>

const initialState = [] as InitialStateType
export const carSpecsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-CAR-SPECS": {
            return [...state = action.carSpecs]
        }
        default:
            return state
    }
}

export const setCarSpecsAC = (carSpecs: InitialStateType) => {
    return ({type: 'SET-CAR-SPECS', carSpecs} as const)
}

export const setCarSpecsTC = (id: string) => (dispatch: Dispatch) => {
    dispatch(changeIsLoading(true))
    api.getCarSpecs(id).then((res: AxiosResponse<InitialStateType>) => {
        dispatch(setCarSpecsAC(res.data))
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        dispatch(changeIsLoading(false))
    })
}

export const updateCarModelInfo = (data: FetchData, modelId: string) => (dispatch: Dispatch) => {
    dispatch(changeIsLoading(true))
    api.updateCarModel(data, modelId).then(() => {
        console.log(`Спасибо за данные об автомобиле ${data.modelType}`)
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        dispatch(changeIsLoading(false))
    })
}

export const addNewCarModel = (data: NewModelType, car_id: string) => (dispatch: Dispatch) => {
    dispatch(changeIsLoading(true))
    let fetchData: FetchData = {
        modelType: data.model,
        _car_id: car_id,
        info: `Передний - ${data.front}, задний - ${data.back}`
    }
    api.sendCarData(fetchData).then(() => {
        dispatch(addUpdatedCarTC(fetchData))
    }).then(() => {
        console.log(`Спасибо за данные об автомобиле ${data.car} - ${data.model}`)
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        dispatch(changeIsLoading(false))
    })
}

export const setFindedCarSpecs = (type: string) => (dispatch: Dispatch) => {
    api.findCarSpecsByType(type).then((res: AxiosResponse<InitialStateType>) => {
        if (res.data.length < 1) {
            dispatch(setError('Not found'))
        } else {
            dispatch(setError(''))
            dispatch(setCarSpecsAC(res.data))
        }
    })
}
