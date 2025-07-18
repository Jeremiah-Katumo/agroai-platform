import axios from 'axios';

const apiClient = axios.create({ baseURL: 'http://localhost:8000' });
export default apiClient;

export interface CropYieldInput {
    rainfall: number;
    temperature: number;
    humidity: number;
}

export interface PestInput {
    // crop_type: string;
    // pest_type: string;
    // rainfall: number;
    temperature: number;
    humidity: number;
}