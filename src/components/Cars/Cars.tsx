import SingleItem from "../../common/Button/SingleItem";
import React, {memo, useEffect} from "react";
import {InitialStateType, setCarsTC} from "../../BLL/cars-reducer";
import s from './Cars.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../BLL/store";
import {Link} from "react-router-dom";
import {Preloader} from "../../common/Preloader/Preloader";

type carsPropsType = {
    openCarType: (id: string) => void
}


export default memo(function Cars({openCarType}: carsPropsType) {
        const allCars = useSelector<StoreType, InitialStateType>(state => state.cars)

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(setCarsTC())
        }, [dispatch])

    if (allCars.length === 0) {
        return (<Preloader/>)
    }
        return <div className={s.containerCars}>
            {allCars.map(c => <Link to={'/car_models'} key={c._id}>
                <SingleItem key={c._id} id={c._id}
                            callback={openCarType}>{c.name}</SingleItem></Link>)}
        </div>
    }
)