import MyButton from "../common/Button/MyButton";
import React from "react";
import {ModelType} from "../BLL/cars-reducer";
import s from './Cars.module.css'

type carModelsPropsType = {
    openModelInfo: (id: string) => void
    modelsData: Array<ModelType>
}
//console.log('CARLIST render')
export const CarTypeList = (props: carModelsPropsType) => {
    return <div className={s.containerModels}>
            {props.modelsData.map(cc => <MyButton key={cc.id} id={cc.id}
                                                  openCarType={props.openModelInfo}>{cc.type}</MyButton>)}
    </div>
}
