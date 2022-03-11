import React from "react";
import s from './Form.module.css';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {sendCarDataTC} from "../../BLL/cars-reducer";
import {StoreType} from "../../BLL/store";
import {Link} from "react-router-dom";


const Form = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector<StoreType, boolean>(state => state.app.isLoading)
    const formik = useFormik({
        initialValues: {
            car: '',
            front: 'Спереди',
            back: 'Сзади'
        },
        onSubmit: values => {
            dispatch(sendCarDataTC(values))
        }
    })

    return <form onSubmit={formik.handleSubmit} className={s.forms}>
        <Link to={'/'}>main</Link>
        <div className={s.test}>Введите название автомобиля, <p> направление суппортов</p><p> и нажмите кнопку
            отправить!</p>
        </div>
        Название автомобиля
        <input onChange={formik.handleChange} name={'car'} value={formik.values.car} placeholder={"Авто"}
               className={s.option}/>
        Передний суппорт
        <select onChange={formik.handleChange} name={'front'} value={formik.values.front} className={s.option}>
            <option>Спереди</option>
            <option>Сзади</option>
            <option>Неизвестно</option>
        </select>
        Задний суппорт
        <select onChange={formik.handleChange} name={'back'} value={formik.values.back} className={s.option}>
            <option>Сзади</option>
            <option>Спереди</option>
            <option>Барабан</option>
            <option>Неизвестно</option>
        </select>
        <button disabled={isLoading} type={'submit'} className={s.formButton}>Отправить</button>
    </form>


}

export default Form;