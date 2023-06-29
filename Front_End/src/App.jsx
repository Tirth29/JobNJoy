import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Forget } from "./Components/Forget";
import Register2 from "./Components/Register2";

function App() {
  return (
    <>
      <div>
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Sample />} />
          <Route path="/opportunity" element={<Sample />} />
          <Route path="/post" element={<Sample />} />
          <Route path="/refreshment" element={<Sample />} />
          <Route path="/profile" element={<Sample />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Forget" element={<Forget />} />
          <Route path="/Register2" element={<Register2 />} />
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
