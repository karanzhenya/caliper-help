import {createStore, combineReducers} from "redux";
import {carsReducer} from "./cars-reducer";
import {applyMiddleware} from "redux"
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";
import {carSpecsReducer} from "./car_spec-reducer";

const reducers = combineReducers({
    cars: carsReducer,
    app: appReducer,
    carSpecs: carSpecsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type StoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store

