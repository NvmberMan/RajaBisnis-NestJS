import { client, ResponseAPI } from "./Api"

export const getPosts = async (): Promise<ResponseAPI[]> => {

    const { data } = await client.get<ResponseAPI[]>('?_limit=6')
    return data
}