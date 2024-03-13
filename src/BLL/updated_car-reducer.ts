import {Dispatch} from "redux";
import {api} from "../api/api";
import {changeIsLoading, setMessage} from "./app-reducer";
import {AxiosResponse} from "axios";
import {NewModelType} from "../common/AddNewModelForm/AddNewModelForm";
import {FetchData} from "./cars-reducer";

export type UpdatedCarsType = {
    modelType: string,
    info: string,
    _car_id: string,
    date: string
}

export type UpdatedCarsInitialStateType = UpdatedCarsType[]
export type UpdatedCarsActionsType = ReturnType<typeof setUpdatedCarsAC>

const initialState = [] as UpdatedCarsInitialStateType

export const updatedCarsReducer = (state: UpdatedCarsInitialStateType = initialState, action: UpdatedCarsActionsType): UpdatedCarsInitialStateType => {
    switch (action.type) {
        case "SET-UPDATED-CARS": {
            return [...state = action.updatedCars.sort((a, b) => a.date > b.date ? 1 : -1)]
        }
        default:
            return state
    }
}

export const setUpdatedCarsAC = (updatedCars: UpdatedCarsInitialStateType) => {
    return ({type: 'SET-UPDATED-CARS', updatedCars} as const)
}

export const setUpdatedCarsTC = () => (dispatch: Dispatch) => {
    api.getUpdatedCars().then((res: AxiosResponse<UpdatedCarsInitialStateType>) => {
        dispatch(setUpdatedCarsAC(res.data))
    })
}

export const addUpdatedCarTC = (model: string, car_id:string, front: string, back: string) => (dispatch: Dispatch) => {
    dispatch(changeIsLoading(true))
    let fetchData: FetchData = {
        modelType: model,
        _car_id: car_id,
        info: `Передний - ${front}, задний - ${back}`
    }
  api.addUpdatedCar(fetchData).then(() => {
      console.log(`Добавлена в обновления - ${fetchData.modelType}`)
  }).catch((err) => {
      console.log(err)
  })
}
