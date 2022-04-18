import React, {useCallback} from 'react';
import MyInput from "../common/Input/MyInput";
import s from "./Main.module.scss"
import {Cars} from "./Cars";
import {CarTypeList} from "./CarTypeList";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../BLL/store";
import {InitialStateType} from "../BLL/cars-reducer";
import {LinkButton} from "../common/Button/LinkButton";
import {debounce} from 'lodash';
import {CarSpecType, setCarSpecsTC, setFindedCarSpecs} from "../BLL/car_spec-reducer";

export type MainPropsType = {
    setActive: (status: boolean) => void
    setInfo: (info: string) => void
}
export const Main = ({setActive, setInfo}: MainPropsType) => {
    const allCars = useSelector<StoreType, InitialStateType>(state => state.cars)
    const carSpecs = useSelector<StoreType, CarSpecType[]>(state => state.carSpecs)
    const dispatch = useDispatch();

    const openCarType = (id: string) => {
        dispatch(setCarSpecsTC(id))
    }
    const openModelInfo = (id: string) => {
        setActive(true)
        let currentCarModelInfo = carSpecs.find(cc => cc._id === id)
        if (currentCarModelInfo) {
            setInfo(currentCarModelInfo.info)
        }
    }
    const onChangeSearchValue = (value: string) => {
        if (value !== '') {
            dispatch(setFindedCarSpecs(value))
        }
    }
    const debouncedChangeHandler = useCallback(debounce(onChangeSearchValue, 2000), []);
    return (
        <div>
            <LinkButton link={'/send'}>Форма для отправки информации</LinkButton>
            <MyInput placeholder={"Поиск по модели"} onChangeText={debouncedChangeHandler} className={s.input}/>
            <Cars filterCars={allCars} openCarType={openCarType}/>
            <CarTypeList openModelInfo={openModelInfo} carSpecs={carSpecs}/>
        </div>
    );
};