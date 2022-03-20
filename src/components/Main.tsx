import React, {useState} from 'react';
import MyInput from "../common/Input/MyInput";
import s from "./Main.module.scss"
import {Cars} from "./Cars";
import {CarModels} from "./CarModels";
import {useSelector} from "react-redux";
import {StoreType} from "../BLL/store";
import {InitialStateType, ModelType} from "../BLL/cars-reducer";
import {LinkButton} from "../common/Button/LinkButton";

export type MainPropsType = {
    setActive: (status: boolean) => void
    setInfo: (info: string) => void
}

export const Main = ({setActive, setInfo}: MainPropsType) => {
    const allCars = useSelector<StoreType, InitialStateType>(state => state.cars)

    const [currentCarModels, setCurrentCarModels] = useState<Array<ModelType>>([])
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (value: string) => {
        setInputValue(value)
    }
    const openCarType = (id: string) => {
        let car = filterCars.find(tc => tc.id === id)
        if (car) {
            setCurrentCarModels(car.models)
        }
    }
    const openModelInfo = (id: string) => {
        setActive(true)
        let currentCarModelInfo = currentCarModels.find(cc => cc.id === id)
        if (currentCarModelInfo) {
            setInfo(currentCarModelInfo.info)
        }
    }
    const filterCars = allCars.filter(c => c.name.includes(inputValue.toUpperCase()))
    return (
        <div>
            <LinkButton link={'/send'}>Форма для отправки информации</LinkButton>
            <MyInput placeholder={"Марка авто"} onChangeText={handleInputValue} className={s.input}/>
            <Cars filterCars={filterCars} openCarType={openCarType}/>
            <CarModels currentCarModels={currentCarModels} openModelInfo={openModelInfo}/>
        </div>
    );
};