import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import MyInput from "../common/Input/MyInput";
import s from "./Main.module.scss"
import {Cars} from "./Cars";
import {CarModels} from "./CarModels";
import {useSelector} from "react-redux";
import {StoreType} from "../BLL/store";
import {InitialStateType, ModelType} from "../BLL/cars-reducer";
import {LinkButton} from "../common/Button/LinkButton";
import MyButton from "../common/Button/MyButton";

export type MainPropsType = {
    setActive: (status: boolean) => void
    setInfo: (info: string) => void
}

export const Main = ({setActive, setInfo}: MainPropsType) => {
    const allCars = useSelector<StoreType, InitialStateType>(state => state.cars)

    const [currentCarModels, setCurrentCarModels] = useState<Array<ModelType>>([])
    const [inputValue, setInputValue] = useState<string>('')
    const [findedModel, setFindedModel] = useState<ModelType[]>([])
    const [searchModel, setSearchModel] = useState<string>()

    const handleInputValue = (value: string) => {
        setInputValue(value)
    }
    const openCarType = (id: string) => {
        let car = filterCars.find((tc) => {
            return tc.id === id
        })
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
    const soloModelInfo = (id: string) => {
        setActive(true)
        const neddedCar = filt.filter((n: any) => n.id === id)
        setInfo(neddedCar)
    }
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchModel(e.currentTarget.value)
    }
    const filterCars = allCars.filter(c => c.name.includes(inputValue.toUpperCase()))

    const arr: any = []
    allCars.map(ac => ac.models.forEach(m => arr.push(m)))
    const filt = arr.filter((fil: any) => fil.type.toLowerCase().includes(searchModel))
    console.log(filt)
    return (
        <div>
            <LinkButton link={'/send'}>Форма для отправки информации</LinkButton>
            <MyInput placeholder={"Марка авто"} onChangeText={handleInputValue} className={s.input}/>
            <input onChange={search}/>
            <Cars filterCars={filterCars} openCarType={openCarType}/>
            <CarModels currentCarModels={currentCarModels} openModelInfo={openModelInfo}/>
            {filt && filt.map((f: any) => <button onClick={() => soloModelInfo(f.id)}>{f.type}</button>)}
        </div>
    );
};