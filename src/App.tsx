import React, {useState} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {StoreType} from "./BLL/store";
import {InitialStateType} from "./BLL/app-reducer";
import MyButton from "./common/Button/MyButton";
import MyInput from "./common/Input/MyInput";

const App = () => {

    const AllCars = useSelector<StoreType, InitialStateType>(state => state.app)
    const [cars, setCars] = useState(AllCars)
    const [inputValue, setInputValue] = useState('')

    const handleInputValue = (value: string) => {
        setInputValue(value)
    }
    const filterCars = cars.filter(c => c.name.includes(inputValue.toUpperCase()))
    return (
        <div className='wrapper'>
            <MyInput onChangeText={handleInputValue}/>
            <div className='container'>{filterCars.map(c => <MyButton>{c.name}</MyButton>)}</div>
        </div>
    );
}

export default App;
