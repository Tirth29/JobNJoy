import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import Opportunity from "./Components/opportunity/opportunity";
import Company from "./Components/opportunity/parts/company/Company";


function App() {
  return (
    <>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/home" element={<Sample/>} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/post" element={<Sample />} />
          <Route path="/refreshment" element={<Sample />} />
          <Route path="/profile" element={<Sample />} />
          <Route path="/opportunity/CompanyPage" element={<Company />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
