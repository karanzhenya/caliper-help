import React, {useEffect, useState} from 'react';
import s from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./BLL/store";
import {setCarsTC} from "./BLL/cars-reducer";
import Modal from "./common/Modal/Modal";
import Form from "./common/Form/Form";
import CircularProgress from "@mui/material/CircularProgress";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Main} from "./components/Main";

export type DataType = {
    car: string
    front: string
    back: string
}

const App = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector<StoreType, boolean>(state => state.app.isLoading)

    const [info, setInfo] = useState<string>('')
    const [active, setActive] = useState(false)

    useEffect(() => {
        dispatch(setCarsTC())
    }, [dispatch])


    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Modal active={active} setActive={setActive}>{info}</Modal>
                <Routes>
                    <Route path={'/'} element={<Main setActive={setActive} setInfo={setInfo}/>}/>
                    <Route path={'/send'} element={<Form/>}/>
                </Routes>
                {isLoading && <CircularProgress size={100} className={s.loading}/>}
            </div>
        </BrowserRouter>
    );
}

export default App;
