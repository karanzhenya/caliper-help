import SingleItem from "../../common/Button/SingleItem";
import React, {memo, useState} from "react";
import s from './CarsModels.module.scss'
import {CarSpecType, setCarSpecsAC} from "../../BLL/car_spec-reducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../BLL/store";
import Modal from "../../common/Modal/Modal";
import {LinkButton} from "../../common/Button/LinkButton";
import {Preloader} from "../../common/Preloader/Preloader";

export default memo(function CarTypeList() {
        const dispatch = useDispatch();
        const carSpecs = useSelector<StoreType, CarSpecType[]>(state => state.carSpecs)
        const isLoading = useSelector<StoreType, boolean>(state => state.app.isLoading)

        const [info, setInfo] = useState<string>('')
        const [active, setActive] = useState(false)
        const [carId, setCarId] = useState<string>('')
        const [modelType, setModelType] = useState<string>('')
        const [modelId, setModelId] = useState<string>('')

        const openModelInfo = (id: string) => {
            setActive(true)
            let currentCarModelInfo = carSpecs.find(cc => cc._id === id)
            if (currentCarModelInfo) {
                setInfo(currentCarModelInfo.info)
                setCarId(currentCarModelInfo._car_id)
                setModelType(currentCarModelInfo.modelType)
                setModelId(id)
            }
        }
        const sortingCarSpecs = carSpecs.sort((a, b) => a.modelType > b.modelType ? 1 : -1)

        if (isLoading) {
            return (<Preloader/>)
        }
        const clearCarTypes = () => {
            dispatch(setCarSpecsAC([]))
        }

        return <div className={s.models}>
            <Modal active={active} setActive={setActive} carId={carId} modelType={modelType} modelId={modelId}>{info}</Modal>
            <LinkButton link={'/car'} callback={clearCarTypes}>Назад</LinkButton>
            {sortingCarSpecs.map(cc => <SingleItem key={cc._id} id={cc._id}
                                                   callback={openModelInfo} className={s.item}>{cc.modelType}</SingleItem>)}
        </div>
    }
)
