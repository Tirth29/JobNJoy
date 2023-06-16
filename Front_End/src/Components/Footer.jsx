import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MovieIcon from "@mui/icons-material/Movie";
import WorkIcon from "@mui/icons-material/Work";
import  {useNavigate} from "react-router-dom";
import react from "react";

function Footer() {
    const navigate=useNavigate();
  return (
    <>
      {/* <div className="line">
          </div> */}
<div className="fixed bottom-0 w-screen h-12 bg-white border border-white ">
      <hr
        style={{
          background: 'black',
          color: 'black',
          borderColor: 'black',
          height: '3px',
        }}
      />
        <button className="h-10 mx-4 ml-5" onClick={()=>navigate("/home") }>
          <HomeIcon fontSize="large" />
        </button>
        <button className="mx-4"  onClick={()=>navigate("/opportunity") }>
          <WorkIcon fontSize="large" />
        </button>
        <button className="mx-4"  onClick={()=>navigate("/post") }>
          <PostAddIcon fontSize="large"/>
        </button>
        <button className="mx-4"  onClick={()=>navigate("/refreshment") }>
          <MovieIcon fontSize="large"/>
        </button>
        <button className="mx-4"  onClick={()=>navigate("/profile") }>
          <AccountBoxIcon fontSize="large"/>
        </button>
      </div>
    </>
  );
}

export default Footer;
