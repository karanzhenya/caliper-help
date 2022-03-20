import MyButton from "../common/Button/MyButton";
import React from "react";
import {ModelType} from "../BLL/cars-reducer";
import s from './Cars.module.css'

type carModelsPropsType = {
    openModelInfo: (id: string) => void
    currentCarModels: Array<ModelType>
}

export const CarModels = (props: carModelsPropsType) => {
    return <div className={s.containerModels}>
            {props.currentCarModels.map(cc => <MyButton key={cc.id} id={cc.id}
                                                  openCarType={props.openModelInfo}>{cc.type}</MyButton>)}
    </div>
}
