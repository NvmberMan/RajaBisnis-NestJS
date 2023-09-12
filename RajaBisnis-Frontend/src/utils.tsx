import axios from 'axios';

export const client = axios.create({
    baseURL: "https://b0d3-158-140-191-50.ngrok-free.app/shop"
})

export interface ResponseAPI {
    id: string;
    name: string;
    description: string;
}

