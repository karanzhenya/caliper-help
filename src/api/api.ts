import axios from "axios";
import {FetchData} from "../BLL/cars-reducer";

const instance = axios.create({
    baseURL: 'https://cars-express-back.vercel.app/',
    //baseURL: 'http://localhost:5000',
    headers: {
        withCredentials: true,
    }
})

export const api = {
    sendCarData(data: FetchData) {
        return instance.post('carspecs', {...data})
    },
    getCars() {
        return instance.get('cars')
    },
    getCarSpecs(id: string) {
        return instance.get(`cars/${id}/specs`)
    },
    findCarSpecsByType(type: string) {
        return instance.get(`/carspecs/search?modelType=${type}`)
    },
    updateCarModel(data: FetchData, modelId: string) {
        return instance.put<FetchData>(`/update/${modelId}`, {...data})
    },
    addUpdatedCar(data: FetchData) {
        return instance.post<FetchData>(`/updated/cars`, {...data})
    },
    getUpdatedCars() {
        return instance.get('/updated/cars')
    }
}
