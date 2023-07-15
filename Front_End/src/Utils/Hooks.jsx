// import axios from "axios";
import { useEffect, useState } from "react";
// import { Toast } from "react-native-toast-message";
import { useSelector } from "react-redux";
import { loadUser, otheruserProfile } from "../reducer/Actions/UserAction";
// import { server } from "../reducer/api";
import { useNavigate } from 'react-router-dom';

export const useMessageAndErrorUser = (
    navigation,
    dispatch,
    navigateTo = "login"
  ) => {
    const navigate = useNavigate();
    const { loading, message,error,profile} = useSelector((state) => state.user);
    
    useEffect(() => {
      if (message) {
        navigate(`/${navigateTo}`);
        dispatch({
          type: "clearMessage",
        });
        dispatch(loadUser());
      }
      if (profile) {
        navigate(`/${navigateTo}`);
      }

    }, [message, dispatch, navigate, navigateTo]);
  
    return loading;

  };
