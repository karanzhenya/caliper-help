import React, {useCallback} from 'react';
import s from './App.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "./BLL/store";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Preloader} from "./common/Preloader/Preloader";
import News from "./pages/News/News";
import Navbar from "./components/Navbar/Navbar";
import Important from "./pages/Announcement/Announcement";
import CarTypeList from "./pages/CarTypeList/CarTypeList";
import {setCarSpecsTC} from "./BLL/car_spec-reducer";
import Cars from "./components/Cars/Cars";
import AddNewModelForm from "./common/AddNewModelForm/AddNewModelForm";

const App = () => {

    const dispatch = useDispatch()
    const isLoading = useSelector<StoreType, boolean>(state => state.app.isLoading)

    const openCarType = useCallback((id: string) => {
        dispatch(setCarSpecsTC(id))
    }, [dispatch])

    return (
        <BrowserRouter>
            <div className={s.wrapper}>
                <Navbar/>
                <Routes>
                    <Route path={'/car'} element={<Cars openCarType={openCarType}/>}/>
                    <Route path={'/send'} element={<AddNewModelForm/>}/>
                    <Route path={'/car_models'} element={<CarTypeList/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/important'} element={<Important/>}/>
                </Routes>
                {isLoading && <Preloader/>}
            </div>
        </BrowserRouter>
    );
}

export default App;
