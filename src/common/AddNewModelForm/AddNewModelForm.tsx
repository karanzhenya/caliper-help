import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import s from './AddNewModelForm.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../BLL/store";
import {CarType} from "../../BLL/cars-reducer";
import {addNewCarModel} from "../../BLL/car_spec-reducer";

export type NewModelType = {
    car: string
    model: string
    front: string
    back: string
}

function AddNewModelForm() {
    const cars = useSelector<StoreType, CarType[]>(state => state.cars)
    const {register, handleSubmit, formState: {errors}} = useForm<NewModelType>()
    const dispatch = useDispatch()
    const onSubmit: SubmitHandler<NewModelType> = (data) => {
        const currentCar = cars.find(car => car.name === data.car)
        if (currentCar) dispatch(addNewCarModel(data, currentCar._id))
    }

    return (
        <div className={s.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={s.infoField}>
                    <select {...register("car", {required: true})}>
                        {cars.map(car => <option key={car._id}>{car.name}</option>)}
                    </select>
                </div>
                <input placeholder='модель' {...register("model", {required: true, maxLength: 35})}/>
                <div className={s.infoField}>
                    <label>
                        Передний
                    </label>
                    <select {...register("front", {required: true})}>
                        <option>спереди</option>
                        <option>сзади</option>
                    </select>
                </div>
                <div className={s.infoField}>
                    <label>
                        Задний
                    </label>
                    <select {...register("back", {required: true})}>
                        <option>спереди</option>
                        <option>сзади</option>
                        <option>барабан</option>
                        <option>сзади/барабан</option>
                    </select>
                </div>
                <button>Отправить</button>
            </form>
        </div>
    );
}

export default AddNewModelForm;