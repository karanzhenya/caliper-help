import axios from "axios";
import {DataType} from "../App";

const instance = axios.create({
    baseURL: 'https://cars-express-back.vercel.app/',
    //baseURL: 'http://localhost:5000',
    headers: {
        withCredentials: true,
    }
})

export const api = {
    sendCarData(data: DataType) {
        return axios.post('https://sheet.best/api/sheets/f560259e-138c-4f1a-9a6d-6bc5fd10df5b', {...data})
    },
    getCars() {
        return instance.get('cars')
    },
    getCarSpecs(id: string) {
        return instance.get(`cars/${id}/specs`)
    },
    findCarSpecsByType(type: string) {
        return instance.get(`/carspecs/search?modelType=${type}`)
    }
}
