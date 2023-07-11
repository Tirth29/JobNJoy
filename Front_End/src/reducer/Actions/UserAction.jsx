import { server } from "../api";
import axios from "axios";

export const login = (username,email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

     const {data} = await axios.post(
      `${server}/api/user/login`,
      { username, email, password },
      {
        // credentials: "include",
        // headers: {
        //   // "Content-Type": "application/json",
        // },
        // headers:{
        //   "Content-Type": "application/json"
        // },
        withCredentials: true,
      }
    );
      dispatch({
        type: "loginSuccess",
        payload: data.message,
      });
      console.log(data.token);
      document.cookie = `token=${data.token}`;
      console.log(document.cookie)
      // console.log(data.user.name)
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload:  "Login Failed",
    });
    console.log("Login FAiled")
    console.log(error);
    
  }
};
export const signup = (formData) => async (dispatch) => {
  try {
    // const navigate = useNavigate();
    dispatch({
      type: "registerRequest",
    });
    const { data } = await axios.post(`${server}/api/user/new`, formData, {
      // headers: {
      //   "Content-Type": "multi-part/form-data",
      // },
      withCredentials: true,
    });
    
    dispatch({
      type: "registerSuccess",
      payload: data.message,
    });
    console.log(data.message);
    // navigate("/profile")
  } catch (error) {
    dispatch({
      type: "registerFail",
      // payload: error.response.data.message,
    });
    console.log(error);
    console.log(error.response);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    // console.log("loadUser1");

    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.get(`${server}/api/user/me`, {
      withCredentials: true,
    });
    // .then((res) => {
    //   console.log(res); 
    // })
    // .catch((err) => {
    //   console.log(err.message);
    // });
    // console.log("loadUser2");
    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
    // await setTimeout(5000);
    console.log(data.user);
  } catch (error) {
    // console.log("loadUser3");

    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
    console.log(error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    const { data } = await axios.get(`${server}/user/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
    console.log(data.message);
    
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};

export const updateProfile =
  (name,username,dob,biodata) => async (dispatch) => {
    try {
      console.log("A")
      dispatch({
        type: "updateProfileRequest",
      });
      console.log("b")

      const { data } = await axios.post(
        `${server}/api/user/updateprofile`,{name,username,dob,biodata},
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
          withCredentials: true,
        }
      );
      console.log("c")

      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
      console.log(data.message);
      } catch (error) {
      dispatch({
        type: "updateProfileFail",
        payload: error.response.data.message,
      });
    }
  };


  export const updateProfilePic = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePicRequest",
      });
      console.log(document.cookie);
      // console.log(document.cookie.get("token"));
      // const Cookies = document.cookie;
      const { data } = await axios.post(`${server}/api/user/updateprofilepic`, formData, {
        // headers: {
        //   token:Cookies.get('token')
        // },
        withCredentials: true,
      });
      
      dispatch({
        type: "updatePicSuccess",
        payload: data.message,
      });
      console.log(data.message);
    } catch (error) {
      dispatch({
        type: "updatePicFail",
        payload: "Upload FAil",
      });
      console.log(error)
      console.log("Upload Fail")
    }
  };

  export const uploadPost = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "updatePostRequest",
      });
      // console.log(document.cookie);
      // console.log(document.cookie.get("token"));
      // const Cookies = document.cookie;
      const { data } = await axios.post(`${server}/api/post/postupload`, formData, {
        // headers: {
        //   token:Cookies.get('token')
        // },
        withCredentials: true,
      });
      
      dispatch({
        type: "updatePostSuccess",
        payload: data.message,
      });
      console.log(data.message);
    } catch (error) {
      dispatch({
        type: "updatePostFail",
        payload: "Upload FAil",
      });
      console.log(error)
      console.log("Upload Fail")
    }
  };

  export const myAllPost = () => async (dispatch) => {
    try {
      dispatch({
        type: "myAllPostRequest",
      });
      const { data } = await axios.get(`${server}/api/post/userselfpost`, {
        withCredentials: true,
      });
      
      dispatch({
        type: "myAllPostSuccess",
        payload: data.posts,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: "myAllPostFail",
        payload: "Can't Load Post"
      });
      console.log("Can't Load Post")
      console.log(error)
    }
  };