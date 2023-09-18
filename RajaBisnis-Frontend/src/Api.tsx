import axios from "axios";
export const URL = "https://d152-158-140-191-50.ngrok-free.app";
export const CONFIG =   {
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

export const GetShopId = async(id:string) =>{
  const hit = await axios.get(`${URL}/shop/${id}`, CONFIG);
  return hit.data;
}

export const Getmenuid = async(id:string) =>{
  const hit = await axios.get(`${URL}/menu/${id}`, CONFIG);
  return hit.data;
}
export const Getmenudetail = async(idshop:string,id:string) =>{
  const hit = await axios.get(`${URL}/menu/${idshop}/${id}`, CONFIG);
  return hit.data;
}

export const Getimage = async(name:string) =>{
  const hit = `${URL}/gamedata/image/${name}`;
}


export const GetMenu = async() =>{
    const hit = await axios.get(`${URL}/menu`, CONFIG);
    return hit.data;
}
