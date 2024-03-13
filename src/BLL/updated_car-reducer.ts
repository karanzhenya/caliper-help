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

export const carsReducer = (state: InitialStateType = initialState, action: UpdatedCarsActionsType): UpdatedCarsInitialStateType => {
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

export const addUpdatedCarTC = (data: FetchData) => (dispatch: Dispatch) => {
  api.addUpdatedCar(data).then(() => {
      console.log(`Добавлена в обновления - ${data.model}`)
  }).catch((err) => {
      console.log(err)
  })
}
