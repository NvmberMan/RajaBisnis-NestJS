import axios from "axios";
export const URL = "https://2793-158-140-191-50.ngrok-free.app";
const CONFIG =   {
  headers:{
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true' 
  }
};



export const GetShop = async() =>{
    const hit = await axios.get(`${URL}/shop`, CONFIG);
    return hit.data;
}

export const Getimage = async(name:string) =>{
  const hit = `${URL}/menu/image/${name}`;
}


export const GetMenu = async() =>{
    const hit = await axios.get(`${URL}/menu`, CONFIG);
    return hit.data;
}
