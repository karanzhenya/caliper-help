import MyButton from "../common/Button/MyButton";
import React from "react";
import {InitialStateType} from "../BLL/cars-reducer";
import s from './Cars.module.css'

type carsPropsType = {
    filterCars: InitialStateType
    openCarType: (id: string) => void
}


export const Cars = (props: carsPropsType) => {

    return <div className={s.container}>
        {props.filterCars.map(c => <MyButton key={c.id} id={c.id} openCarType={props.openCarType}>{c.name}</MyButton>)}
    </div>
}
