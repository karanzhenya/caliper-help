import MyButton from "../common/Button/MyButton";
import React from "react";
import {ModelType} from "../BLL/cars-reducer";
import s from './Cars.module.css'

type carsPropsType = {
    currentCarModels: Array<ModelType>
    openModelInfo: (id: string) => void
}


export const CarModels = (props: carsPropsType) => {

    return <div className={s.container}>
            {props.currentCarModels.map(cc => <MyButton key={cc.id} id={cc.id}
                                                  openCarType={props.openModelInfo}>{cc.type}</MyButton>)}
    </div>
}
