import { Route, Routes } from "react-router-dom";
import Sample from "./Components/Sample";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import HomePage from "./Components/HomePage";


function App( ) {

  let pageComponent;
  if(window.location.pathname === '/home' || '/'){pageComponent = null}
  else {pageComponent = <SearchBar />}
  return (
    <>
      <div>
        {/* using condition to move search bar in homePage*/}
        {pageComponent}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/opportunity" element={<Sample />} />
          <Route path="/post" element={<Sample />} />
          <Route path="/refreshment" element={<Sample />} />
          <Route path="/profile" element={<Sample />} />
        </Routes>
      <Footer />
      </div>
    </>
  );
}

export default App;
