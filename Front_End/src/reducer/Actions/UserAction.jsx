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
        withCredentials: true,
      }
    );
      dispatch({
        type: "loginSuccess",
        payload: data.message,
      });
      console.log(data.token);
      document.cookie = `token=${data.token} expires=${new Date(Date.now() + 1000 * 60 * 60 * 24*5).toUTCString()} path=/`;
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
    const pastDate = new Date(Date.now() - 1);
    const pastDateString = pastDate.toUTCString();
    document.cookie = `token=; expires=${pastDateString}; path=/`;
    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
    document.cookie = undefined;
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
      const { data } = await axios.post(`${server}/api/post/postupload`, formData, {
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

  export const uploadReel = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: "updateReelRequest",
      });
      const { data } = await axios.post(`${server}/api/reel/reelupload`, formData, {
        withCredentials: true,
      });
      
      dispatch({
        type: "updateReelSuccess",
        payload: data.message,
      });
      console.log(data.message);
    } catch (error) {
      dispatch({
        type: "updateReelFail",
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
      // console.log(data);
    } catch (error) {
      dispatch({
        type: "myAllPostFail",
        payload: "Can't Load Post"
      });
      console.log("Can't Load Post")
      console.log(error)
    }
  };

  export const otherPost = () => async (dispatch) => {
    try {
      dispatch({
        type: "otherPostRequest",
      });
      const { data } = await axios.get(`${server}/api/post/allotherpost`, {
        withCredentials: true,
      });
      
      dispatch({
        type: "otherPostSuccess",
        payload: data.posts,
      });
      // console.log(data);
    } catch (error) {
      dispatch({
        type: "otherPostFail",
        payload: "Can't Load Post"
      });
      console.log("Can't Load Post")
      console.log(error)
    }
  };

  export const otheruserProfile = (otheruser) => async (dispatch) => {
    try {
      dispatch({
        type: "otherUserProfileRequest",
      });
      const { data } = await axios.get(`${server}/api/user/otheruserprofile?otheruser=${otheruser}`, {
        withCredentials: true,
      });
      
      dispatch({
        type: "otherUserProfileSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "otherUserProfileFail",
        payload: "Can't Load Profile"
      });
      console.log(error)
    }
  };

  export const otherUserPost = (otheruser) => async (dispatch) => {
    try {
      dispatch({
        type: "otherUserPostRequest",
      });
      const { data } = await axios.get(`${server}/api/post/otheruserpost?user=${otheruser}`, {
        withCredentials: true,
      });
      
      dispatch({
        type: "otherUserPostSuccess",
        payload: data.posts,
      });
      // console.log(data.posts);
    } catch (error) {
      dispatch({
        type: "otherUserPostFail",
        payload: "Can't Load Post"
      });
      console.log(error)
    }
  };

  export const allReel=() => async (dispatch)=>{

    try {
      dispatch({
        type: "allReelsRequest",
      });
      const {data}=await axios.get(`${server}/api/reel/allreel`,{
        withCredentials: true,
      });

      dispatch({
        type:"allReelsSuccess",
        payload: data.reels,
      });
      console.log(data.reels);
    } catch (error) {
      dispatch({
        type:"allReelsFailure",
        payload: "nothing in reels"
      });
      console.log(error);
      console.log("nothing in reelssss");
    }


  }
  export const categoryWiseReel=(FormData) => async (dispatch)=>{

    try {
      dispatch({
        type: "categoryWiseRequest",
      });
      const {data}=await axios.get(`${server}/api/reel/categorywisereel`,FormData, {
        withCredentials: true,
      });

      dispatch({
        type:"categoryWiseSuccess",
        payload: data.reels,
      });
      console.log(data.reels);
    } catch (error) {
      dispatch({
        type:"categoryWiseFailure",
        payload: "nothing in reels"
      });
      console.log(error);
      console.log("nothing in reelssss");
    }


  }

  export const like=(_id) => async (dispatch)=>{

    try {
      dispatch({
        type: "ReellikeRequest",
      });
      const {data}=await axios.get(`${server}/api/reel/like`,_id, {
        withCredentials: true,
      });

      dispatch({
        type:"ReellikeSuccess",
        payload: data,
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type:"ReellikeRequestFailure",
        payload: "nothing in reels"
      });
      console.log(error);
      console.log("nothing in reelssss");
    }


  }