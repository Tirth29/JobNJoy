import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Components/HomePage";
import Admin from "./Components/Admin";


function App( ) {

  return (
    <>
      <div>
      {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/opportunity" element={<Sample />} />
          <Route path="/post" element={<Sample />} />
          <Route path="/refreshment" element={<Sample />} />
          <Route path="/profile" element={<Sample />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
