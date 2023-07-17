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

export const addcompany = (formData) => async (dispatch) =>{
  try {
    dispatch({
      type:"addCompanyRequest",
    });
    console.log("A")
    const {data} = await axios.post(`${server}/api/company/newcompany`,formData,{
      withCredentials: true, 
    });

    dispatch({
      type:"addCompanySuccess",
      payload: data.message,
    });
    console.log(data.message);

  } catch (error) {
    dispatch({
      type:"addCompanyFail",
      payload:"Add Company Failed"
    });
    console.log(error);
    console.log(error.response);
  }
}

export const loadCompany = () => async (dispatch) => {
  try {
    dispatch({
      type:"loadCompanyRequest",
    });
    const { data } = await axios.get(`${server}/api/company/getcompany`,{
      withCredentials: true, 
    });
    dispatch({
      type:"loadCompanySuccess",
      payload: data.company,
    });
    console.log(data.company);
    data.company.map((company)=>{
      console.log(company);
      console.log(company.company_mail)
    })
  } catch (error) {
    dispatch({
      type: "loadCompanyFail",
      payload: error.response.data.message,
    });
    console.log(error);
  }
};


export const updateCompanyPhoto = () => { 

}

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

  export const updateCompany = 
  (company_mail,domain,hiring,hiring_domain,stipend,salary,total_employee,total_vacancy,company_address,description) => async (dispatch)=> {
    try {
      console.log("update company detail started");
      dispatch({
        type: "updateCompanyRequest",
      });
      
      const { data } = await axios.post(`${server}/api/user/updatecompany`,
      {company_mail,domain,hiring,hiring_domain,stipend,salary,total_employee,total_vacancy,company_address,description},
      {
        
        withCredentials: true,
      }); 

      dispatch({
        type: "updateCompanySuccess",
        payload: data.message,
      });
      console.log(data.message);
    } catch (error) {
      dispatch({
        type: "updateCompanyFail",
        payload: error.response.data.message,
      });
    }
  }

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
      console.log(data);
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
      // console.log(data);
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