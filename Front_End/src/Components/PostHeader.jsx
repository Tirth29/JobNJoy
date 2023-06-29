import React from 'react'
import { AiOutlineRollback } from 'react-icons/ai'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MessageIcon from '@mui/icons-material/Message';
import { useNavigate } from 'react-router-dom';

function PostHeader() {
  const navigate = useNavigate();
  const GoTo = () => {
    navigate("/postupload");
  }
  return (
    <div>
      <div className="icon bg-black flex flex-row">
      <button>
          <AiOutlineRollback className="font-semibold text-4xl text-white h-10 "/>
        </button>
        <button className='text-white mx-2'>
            <PersonSearchIcon fontSize='large'/>
        </button>
        <input placeholder='Search Profile...' className='w-28 my-1 rounded-lg'/>
        <button className="btn bg-white w-24 my-1 rounded-lg mx-2" onClick={GoTo}>
            <p>Post Upload</p>
        </button>
        <button>
            <MessageIcon fontSize='large' className='text-white pl-1'/>
        </button>
      </div>
    </div>
  )
}

export default PostHeader
