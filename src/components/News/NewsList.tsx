import {memo} from 'react';
import {NewsType} from "./News";
import axios from "axios";

type NewsListPropsType = {
    newsList: NewsType
}
const instance = axios.create({
    //baseURL: 'https://cars-caliper.herokuapp.com/',
    baseURL: 'http://localhost:5000',
    headers: {
        withCredentials: true,
    }
})
const fun = () => {
    /*fetch('http://localhost:5000/users', {
        method: "GET",
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }

    }).then(response => {
        console.log(response)
    }).catch((e) => {
        console.log(e)
    })*/
    instance.get('users').then((res) => {
        console.log(res)})
}
export default memo(function NewsList({newsList}: NewsListPropsType) {
    return (
        <>
            <button onClick={fun}>X</button>
            <h1>Последние обновления {newsList.updatedDate}</h1>
            <h3>Добавлены авто</h3>
            {newsList.types.map((n) => {
                return <ul key={n.type}>
                    <li>{n.type}</li>
                </ul>
            })}
        </>
    );
})