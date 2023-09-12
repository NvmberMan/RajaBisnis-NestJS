import axios from 'axios';

export const clientshop = axios.create({
    baseURL: "https://b0d3-158-140-191-50.ngrok-free.app/shop"
})

export interface ResponseAPI {
    id: string;
    name: string;
    description: string;
}

export const getshop = async (): Promise<ResponseAPI[]> => {

    const { data } = await clientshop.get<ResponseAPI[]>('?_limit=6')
    return data
}

