import SingleItem from "../common/Button/SingleItem";
import React from "react";
import {InitialStateType} from "../BLL/cars-reducer";
import s from './Cars.module.css'

type carsPropsType = {
    filterCars: InitialStateType
    openCarType: (id: string) => void
}
export const Cars = ({filterCars, openCarType}: carsPropsType) => {
    return <div className={s.containerCars}>
        {filterCars.map(c => <SingleItem key={c._id} id={c._id} callback={openCarType}>{c.name}</SingleItem>)}
    </div>
}
