import { server } from "../api";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: "loginRequest",
        })
        const {data} = await axios.post(`${server}/api/user/login`, {email, password},
        {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "loginSuccess",
            payload: data.message,
          });
          console.log(data.message)
    }catch(error){
        dispatch({
            type: "loginFail",
            payload: error.response.data.message,
        })
        console.log(error)
    }

};

export const loadUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "loadUserRequest",
      });
      const { data } = await axios.get(`${server}/api/user/me`, {
        withCredentials: true,
      });
  
      dispatch({
        type: "loadUserSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "loadUserFail",
        payload: error.response.data.message,
      });
    }
  };