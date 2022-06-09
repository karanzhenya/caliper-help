import React, {memo, useCallback} from 'react';
import MyInput from "../common/Input/MyInput";
import s from "./Main.module.scss"
import Cars from "./Cars";
import CarTypeList from "./CarTypeList";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../BLL/store";
import {InitialStateType} from "../BLL/cars-reducer";
import {debounce} from 'lodash';
import {CarSpecType, setCarSpecsAC, setCarSpecsTC, setFindedCarSpecs} from "../BLL/car_spec-reducer";
import {Preloader} from "../common/Preloader/Preloader";

export type MainPropsType = {
    setActive: (status: boolean) => void
    setInfo: (info: string) => void
}
export default memo(function Main({setActive, setInfo}: MainPropsType) {
        const allCars = useSelector<StoreType, InitialStateType>(state => state.cars)
        const carSpecs = useSelector<StoreType, CarSpecType[]>(state => state.carSpecs)
        const error = useSelector<StoreType, string>(state => state.app.error)
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
            if (value === '') {
                dispatch(setCarSpecsAC([]))
            }
            if (value !== '') {
                dispatch(setFindedCarSpecs(value))
            }
        }
        const debouncedChangeHandler = useCallback(debounce(onChangeSearchValue, 2000), []);
        if (allCars.length === 0) {
            return <Preloader/>
        }
        const sortingCars = allCars.sort((a, b) => a.name > b.name ? 1 : -1)
        const sortingCarSpecs = carSpecs.sort((a, b) => a.type > b.type ? 1 : -1)
        return (
            <div>
                <MyInput placeholder={"Поиск по модели"} error={error} onChangeText={debouncedChangeHandler}
                         className={s.input}/>
                <Cars filterCars={sortingCars} openCarType={openCarType}/>
                <CarTypeList openModelInfo={openModelInfo} carSpecs={sortingCarSpecs}/>
            </div>
        );
    }
)