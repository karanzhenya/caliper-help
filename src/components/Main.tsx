import React, {useCallback, useEffect, useState} from 'react';
import MyInput from "../common/Input/MyInput";
import s from "./Main.module.scss"
import {Cars} from "./Cars";
import {CarTypeList} from "./CarTypeList";
import {useSelector} from "react-redux";
import {StoreType} from "../BLL/store";
import {InitialStateType, ModelType} from "../BLL/cars-reducer";
import {LinkButton} from "../common/Button/LinkButton";
import {debounce} from 'lodash';

export type MainPropsType = {
    setActive: (status: boolean) => void
    setInfo: (info: string) => void
}

export const Main = ({setActive, setInfo}: MainPropsType) => {
    const allCars = useSelector<StoreType, InitialStateType>(state => state.cars)

    const [currentCarModels, setCurrentCarModels] = useState<Array<ModelType>>([])
    const [searchModel, setSearchModel] = useState<string>()

    useEffect(() => {
        setCurrentCarModels([])
        if (typeof searchModel === "string") {
            const filteredModels = allModels.filter((fil: ModelType) => fil.type.toLowerCase().includes(searchModel))
            setCurrentCarModels(filteredModels)
        }
        if (searchModel === '') {
            setCurrentCarModels([])
        }
    }, [searchModel])

    const allModels: ModelType[] = []
    allCars.map(ac => ac.models.forEach(m => allModels.push(m)))

    const openCarType = (id: string) => {
        setCurrentCarModels([])
        let car = allCars.find((tc) => {
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
    const onChangeSearchValue = (value: string) => {
        setSearchModel(value)
    }
    const debouncedChangeHandler = useCallback(debounce(onChangeSearchValue, 2000), []);
    //console.log('MAIN render')
    return (
        <div>
            <LinkButton link={'/send'}>Форма для отправки информации</LinkButton>
            <MyInput placeholder={"Поиск по модели"} onChangeText={debouncedChangeHandler} className={s.input}/>
            <Cars filterCars={allCars} openCarType={openCarType}/>
            <CarTypeList modelsData={currentCarModels} openModelInfo={openModelInfo}/>
        </div>
    );
};