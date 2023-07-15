// import HomeIcon from "@mui/icons-material/Home";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import PostAddIcon from "@mui/icons-material/PostAdd";
// import MovieIcon from "@mui/icons-material/Movie";
// import WorkIcon from "@mui/icons-material/Work";
// import  {useNavigate} from "react-router-dom";
// // import react from "react";

// function Footer() {
//     const navigate=useNavigate();
//   return (
//     <>
//       {/* <div className="line">
//           </div> */}
// <div className="absolute bottom-0 h-12 bg-black w-[inherit]">
//       <hr
//         style={{
//           background: 'black',
//           color: 'black',
//           borderColor: 'black',
//           height: '3px',
//         }}
//       />
//         <button className="ml-5 mx-4 h-10" onClick={()=>navigate("/home") }>
//           <HomeIcon fontSize="large" />
//       </button>
//         <button className="mx-4"  onClick={()=>navigate("/opportunity") }>
//           <WorkIcon fontSize="large" />
//         </button>
//         <button className="mx-4"  onClick={()=>navigate("/post") }>
//           <PostAddIcon fontSize="large"/>
//         </button>
//         <button className="mx-4"  onClick={()=>navigate("/refreshment") }>
//           <MovieIcon fontSize="large"/>
//         </button>
//         <button className="mx-4"  onClick={()=>navigate("/profile") }>
//           <AccountBoxIcon fontSize="large"/>
//         </button>
//       </div>
//     </>
//   );
// }

// export default Footer;
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PostAddIcon from "@mui/icons-material/PostAdd";
import MovieIcon from "@mui/icons-material/Movie";
import WorkIcon from "@mui/icons-material/Work";
<<<<<<< HEAD
import  {useNavigate} from "react-router-dom";
import react from "react";
=======
import { useNavigate } from "react-router-dom";
>>>>>>> 852cd95f2c9bde679c876d9fdecfd852495fc993

function Footer() {
  const navigate = useNavigate();

  return (
    <>
<<<<<<< HEAD
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
=======
      <div className="line"></div>
      <div className="footer bg-black flex justify-between items-center px-4 py-2">
        <button className="footer-button" onClick={() => navigate("/home")}>
          <HomeIcon className="text-white" fontSize="large" />
>>>>>>> 852cd95f2c9bde679c876d9fdecfd852495fc993
        </button>
        <button className="footer-button" onClick={() => navigate("/opportunity")}>
          <WorkIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/post")}>
          <PostAddIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/refreshment")}>
          <MovieIcon className="text-white" fontSize="large" />
        </button>
        <button className="footer-button" onClick={() => navigate("/profile")}>
          <AccountBoxIcon className="text-white" fontSize="large" />
        </button>
      </div>
    </>
  );
}

export default Footer;

