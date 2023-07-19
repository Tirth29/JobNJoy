import { useDispatch, useSelector } from 'react-redux';
import { loadUser, myAllPost, otherPost } from './reducer/Actions/UserAction';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sample from './Components/Sample';
import Footer from './Components/Footer';
import Refreshment from './Screens/Refreshment';
import Post from './Screens/Post';
import Profile from './Screens/Profile';
import EditProfile from './Screens/EditProfile';
import Opportunity from './Components/opportunity/opportunity';
import Company from './Components/opportunity/parts/company/Company';
import VisitProfile from './Screens/VisitProfile';
import PostUpload from './Screens/PostUpload';
import ReelUpload from './Screens/ReelUpload';
import Login from './Components/Login';
import Register from './Components/Register';
import Forget from './Components/Forget';
import Home from './Components/Home';
import { useEffect, useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const location = useLocation();
  const [redirectToProfile, setRedirectToProfile] = useState(false);
  // const {otherposts} = useSelector((state) => state.user);
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  // console.log(otherposts)
  useEffect(() => {
    // dispatch(otherPost());
    dispatch(myAllPost());
    dispatch(otherPost());
    
    // Check for cookie existence
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('token='))
      ?.split('=')[1];
      
    if (token) {
      console.log("Token exists");
      setRedirectToProfile(true);
    }
  }, [dispatch]);
  return (
    <>
      <Routes>

          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/forget" element={<Forget />} />
            {/* <Route path="/" element={<Sample />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/postupload" element={<PostUpload />} />
            <Route path="/reelupload" element={<ReelUpload />} />
            <Route path="/refreshment" element={<Refreshment />} />
            <Route path="/opportunity" element={<Opportunity />} />
            {redirectToProfile && (
            <Route path="/" element={<Profile />} />
          )}
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/visitprofile" element={<VisitProfile />} />
            <Route path="/opportunity/CompanyPage" element={<Company />} />
          </>

      </Routes>
    </>
  );
}

export default App;

