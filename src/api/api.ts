import axios from "axios";
import {DataType} from "../App";

const instance = axios.create({
    //baseURL: 'http://localhost:3033/'
    baseURL: 'caliper-server-production.up.railway.app/'
})

export const api = {
    sendCarData(data: DataType) {
        return axios.post('https://sheet.best/api/sheets/f560259e-138c-4f1a-9a6d-6bc5fd10df5b', {...data})
    },
    getCars() {
        return instance.get('car')
    },
    getCarSpecs(id: string) {
        return instance.get(`car/${id}/specs`)
    },
    findCarSpecsByType(type: string) {
        return instance.get(`/car/specs/search?type=${type}`)
    }
}
