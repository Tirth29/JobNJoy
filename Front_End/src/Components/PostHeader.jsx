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
    <div className='absolute lg:w-full'>
      <div className="icon bg-black flex flex-row py-1 ">
      <button className='lg:mx-10'>
          <AiOutlineRollback className="font-semibold text-4xl text-white h-10 "/>
        </button>
        <button className='text-white lg:ml-72 '>
            <PersonSearchIcon fontSize='large'/>
        </button>
        <input placeholder='Search Profile...' className=' lg:w-80 lg:mx-20 my-1 rounded-lg'/>
        <button className="btn bg-white lg:mr-80 w-24 my-1 rounded-lg mx-2" onClick={GoTo}>
            <p>Post Upload</p>
        </button>
        {/* <button>
            <MessageIcon fontSize='large' className='text-white pl-1'/>
        </button> */}
      </div>
    </div>
  )
}

export default PostHeader
