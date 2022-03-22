import React, {useState} from 'react';
import MyInput from "../common/Input/MyInput";
import s from "./Main.module.scss"
import {Cars} from "./Cars";
import {CarTypeList} from "./CarTypeList";
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
    const [searchModel, setSearchModel] = useState<string>()

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
    const search = (value: string) => {
        setSearchModel(value)
    }
    /*const debouncedChangeHandler = useCallback(debounce(onChangeSearchValue, 400), [packs.searchValue]);*/
    const arr: ModelType[] = []
    allCars.map(ac => ac.models.forEach(m => arr.push(m)))
    const filt = arr.filter((fil: any) => fil.type.toLowerCase().includes(searchModel))
    return (
        <div>
            <LinkButton link={'/send'}>Форма для отправки информации</LinkButton>
            <MyInput placeholder={"Поиск по модели"} onChangeText={search} className={s.input}/>
            <Cars filterCars={allCars} openCarType={openCarType}/>
            <CarTypeList modelsData={currentCarModels} openModelInfo={openModelInfo}/>
            {filt && <CarTypeList openModelInfo={openModelInfo} modelsData={filt}/>}
        </div>
    );
};