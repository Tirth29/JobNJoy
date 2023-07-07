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


  
export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const { data } = await axios.post(`${server}/api/user/new`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    dispatch({
      type: "registerSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "registerFail",
      payload: error.response.data.message,
    });
  }
};