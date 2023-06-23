import React from 'react'
import comments from './randPost.json'

function Comments({visible,onClose,comments}) {

    const handleOnClose = (e) =>{
        if (e.target.id ==="close") onClose();  
      };
      if(!visible) return null;

  return (
    <>
      <div id="close" onClick={handleOnClose} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="w-full m-5 overflow-hidden bg-white rounded h-80">
        <div className="flex justify-center w-full h-10 p-2 text-lg"> Comments</div>
        <hr className="h-0.6 bg-black"></hr>
        <div className="overflow-scroll scr">
            <ul>
            {comments?.map((comment) => (
                <>
                    <li>
                    <p className="mx-2 my-1 text-lg leading-relaxed text-slate-500"><b>{comment.username}</b>
                        <br />{comment.comment}</p>
                    <hr />
                    </li>
                </>))}
            </ul>    
        </div>
      </div>
    </div>
    </>
  )
}

export default Comments
