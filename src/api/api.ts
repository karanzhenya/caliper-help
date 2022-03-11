import axios from "axios";
import {DataType} from "../App";

export const api = {
    sendCarData(data: DataType) {
        return axios.post('https://sheet.best/api/sheets/f560259e-138c-4f1a-9a6d-6bc5fd10df5b', {...data})
    }
}
