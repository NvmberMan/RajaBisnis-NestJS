import axios from "axios";

const url = "https://7138-158-140-191-50.ngrok-free.app/";

export const getShoplist = async() =>{
    const shop = await axios.get(`${url}shop`)
    return shop;
}
