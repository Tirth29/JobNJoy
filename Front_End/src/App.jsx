import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { Login } from "./Components/Login";
import Register from "./Components/Register";
import { Forget } from "./Components/Forget";
// import Home from "./Components/Home";
function App() {
  return (
    <>
      <div>
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Sample />} />
          <Route path="/opportunity" element={<Sample />} />
          <Route path="/post" element={<Sample />} />
          <Route path="/refreshment" element={<Sample />} />
          <Route path="/profile" element={<Sample />} />
          {/* <Route path="/Register" element={<Register />} /> */}
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Forget" element={<Forget />} />
        </Routes>
        {/* <Footer />  */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Register2 /> */}
        {/* <Forget/> */}
      </div>
    </>
  );
}

export default App;
