// import React from "react";
// const MyPostImage = ({ post }) => {
//   const [showModal, setShowModal] = React.useState(false);
//   return (
//     <div className="bg-white w-1/3 " >
//       {" "}
//       <img
//         src={post.link}
//         className="h-28 rounded object-contain  items-center"
//       />{" "}
//       {showModal && (
//         <>
//           <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               {/*content*/}
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 {/*header*/}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t" onClick={()=>((showModal)!=showModal)}>
//                     <img src={post.link} className="h-28 rounded object-contain  items-center" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default MyPostImage;
import React, { useState, useEffect } from "react";

const MyPostImage = ({ post }) => {
  const [showModal, setShowModal] = useState(false);

  let pressTimer;

  const handleLongPress = () => {
    pressTimer = setTimeout(() => {
      setShowModal(true);
    }, 1000); // Adjust the duration (in milliseconds) for a long press
  };

  const handleTouchEnd = () => {
    clearTimeout(pressTimer);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest(".modal-content")) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showModal]);

  return (
    <div
      className="bg-white w-1/3"
      onTouchStart={handleLongPress}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleLongPress}
      onMouseUp={handleTouchEnd}
    >
      <img
        src={post.link}
        className="h-28 rounded object-contain items-center"
      />

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl modal-content">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <img
                    src={post.link}
                    className="h-64 rounded object-contain items-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyPostImage;

