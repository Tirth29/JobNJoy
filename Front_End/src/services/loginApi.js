import axios from 'axios'

const url = 'http://localhost:6000'

export const AddUser = async(data) =>{
    try{
        const response = await axios.post(`${url}/AddUser`,data)
        return response.data
    }catch(err){
        console.log('Error while calling AddUser Api : ',err)
    }
}

export const GetUser = async() =>{
    try{
        const response = await axios.get(`${url}/getUser`)
        return response.data
    }catch(err){
        console.log('Error while calling AddUser Api : ',err)
    }
}
