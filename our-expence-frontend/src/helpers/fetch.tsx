import env from "react-dotenv";
const axios = require('axios');

const fetchSinToken = async (endpoint:string, data:any,method:string) => {
    return await axios({
        method: method,
        url: `${env.API_URL}/${endpoint}`,
        data: data,
        headers: { "Content-Type": "application/json" ,     
        },
    })
    
};


const fetchConToken = async (endpoint:string, data:any,method:string) => {

    let userData = sessionStorage.getItem('ndiPortalLogin');

    let token = JSON.parse(!!userData ? userData :'').token

    return await axios({
        method: method,
        url: `${env.API_URL}/${endpoint}`,
        data: data,
        headers: { 
            "Content-Type": "multipart/form-data;charset=UTF-8" ,
            
            "Authorization": `Bearer ${token}`
        },
        // params
    })
    
};


export {
    fetchSinToken,
    fetchConToken,
}