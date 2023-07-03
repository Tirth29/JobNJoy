import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
// import SearchBar from "./Components/SearchBar";
import Refreshment from "./Screens/Refreshment";
import { motion } from "framer-motion";
import Post from "./Screens/Post";
import Profile from "./Screens/Profile";
import EditProfile from "./Screens/EditProfile";
import Opportunity from "./Components/opportunity/opportunity";
import Company from "./Components/opportunity/parts/company/Company";
import VisitProfile from "./Screens/VisitProfile";
import PostUpload from "./Screens/PostUpload";
import ReelUpload from "./Screens/ReelUpload";

import SearchBar from "./Components/SearchBar";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Forget } from "./Components/Forget";
import Register2 from "./Components/Register2";
import Home from "./Components/Home";
import { Provider } from "react-redux";
import { store } from "./reducer/api";
import { useDispatch } from "react-redux";
import { loadUser } from "./reducer/Actions/UserAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);
  return (
    <>
      
        <div>
          {/* <SearchBar /> */}
          <Routes>
            <Route path="/" element={<Sample />} />
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
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Forget" element={<Forget />} />
            <Route path="/Register2" element={<Register2 />} />
          </Routes>
        </div>
        <motion.div
          className="z-50 bg-black text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: "fixed", bottom: 0, width: "100%" }}
        >
          <Footer />
        </motion.div>

    </>
  );
}

export default App;
