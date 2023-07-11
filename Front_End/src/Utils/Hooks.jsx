// import axios from "axios";
import { useEffect, useState } from "react";
// import { Toast } from "react-native-toast-message";
import { useSelector } from "react-redux";
import { loadUser } from "../reducer/Actions/UserAction";
// import { server } from "../reducer/api";
import { useNavigate } from 'react-router-dom';

export const useMessageAndErrorUser = (
    navigation,
    dispatch,
    navigateTo = "login"
  ) => {
    const navigate = useNavigate();
    const { loading, message, error } = useSelector((state) => state.user);
    
    useEffect(() => {
      if (message) {
        navigate(`/${navigateTo}`);
        // Toast.show({
        //   type: "success",
        //   text1: message,
        // });
        dispatch({
          type: "clearMessage",
        });
        dispatch(loadUser());
      }
    }, [message, dispatch, navigate, navigateTo]);
  
    return loading;
  };