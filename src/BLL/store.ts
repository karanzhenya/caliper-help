import {createStore, combineReducers} from "redux";
import {carsReducer} from "./cars-reducer";
import {applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";
import {carSpecsReducer} from "./car_spec-reducer";
import {updatedCarsReducer} from "./updated_car-reducer";

const reducers = combineReducers({
    cars: carsReducer,
    app: appReducer,
    carSpecs: carSpecsReducer,
    updatedCars: updatedCarsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type StoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store

