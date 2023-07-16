import { useDispatch, useSelector } from 'react-redux';
import { loadUser, myAllPost, otherPost } from './reducer/Actions/UserAction';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const dispatch = useDispatch();
  // const {otherposts} = useSelector((state) => state.user);
  // const isAuthenticated = useSelector((state) => state.isAuthenticated);
  // console.log(otherposts)
  useEffect(() => {
    // dispatch(otherPost());
    dispatch(myAllPost());
    dispatch(otherPost());
  }, [dispatch]);

  return (
    <>
      <Routes>

          <>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/forget" element={<Forget />} />
            {/* <Route path="/" element={<Sample />} /> */}
            <Route path="/home" element={<Sample />} />
            <Route path="/post" element={<Post />} />
            <Route path="/postupload" element={<PostUpload />} />
            <Route path="/reelupload" element={<ReelUpload />} />
            <Route path="/refreshment" element={<Refreshment />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/visitprofile" element={<VisitProfile />} />
            <Route path="/opportunity/CompanyPage" element={<Company />} />
          </>

      </Routes>


        <motion.div
          className="z-50 bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'fixed', bottom: 0, width: '100%' }}
        >
          <Footer />
        </motion.div>
  
    </>
  );
}

export default App;

