import React from 'react';
import {useDispatch} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {updateCarModelInfo} from "../../BLL/car_spec-reducer";
import s from './MyForm.module.scss'
import {addUpdatedCarTC} from "../../BLL/updated_car-reducer";

type DescriptionType = {
    front: 'спереди' | 'сзади'
    back: 'спереди' | 'сзади' | 'барабан' | 'сзади/барабан'
}

type MyFormPropsType = {
    carId: string
    modelId: string
    modelType: string
    setActive: (activeStatus: boolean) => void
}

function MyForm({modelType, modelId, carId, setActive}: MyFormPropsType) {
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm<DescriptionType>()
    const onSubmit: SubmitHandler<DescriptionType> = (data: DescriptionType) => {
        const generatedData = {modelType, info: `Передний - ${data.front}, задний - ${data.back}`, _car_id: carId}
        dispatch(updateCarModelInfo(generatedData, modelId))
        dispatch(addUpdatedCarTC(modelType, carId, data.front, data.back))
        setActive(false)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.infoField}>
                <label>Передний</label>
                <select {...register("front", {required: true})}>
                    <option value=''>-</option>
                    <option value='спереди'>спереди</option>
                    <option value='сзади'>сзади</option>
                </select>
                <br/>
                {errors.front ? 'Обязательно заполнить' : null}
            </div>
            <div className={s.infoField}>
                <label>Задний</label>
                <select {...register("back", {required: true})}>
                    <option value=''>-</option>
                    <option value='спереди'>спереди</option>
                    <option value='сзади'>сзади</option>
                    <option value='барабн'>барабан</option>
                    <option value='сзади/барабан'>сзади/барабан</option>
                </select>
                <br/>
                {errors.back ? 'Обязательно заполнить' : null}
            </div>
            <button>Добавить</button>
        </form>
    );
}

export default MyForm;