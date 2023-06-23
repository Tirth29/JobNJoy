import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import liked from "../assets/liked.svg"
import notliked from "../assets/notliked.svg"
import Comments from './Comments'

function NewPostCard({ username, likes, comments, imgUrl, caption, userProfile, title }) {

    // let {username,likes,comments,imgUrl,caption,userProfile,title} = this.props
    if (likes > 1000 & likes < 1000000) {
        likes = likes / 1000
        likes = likes.toFixed(1)
        likes += "k"
    }
    else if (likes > 1000000) {
        likes = likes / 1000000
        likes = likes.toFixed(1)
        likes += "M"
    }

    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    let commentsCount = comments.length;
     
    const [isLike, setIsLike] = useState(false);
    const OnLike = () => {
        setIsLike(!isLike);
    };
    const [isSave, setIsSave] = useState(false);
    const OnSave = () => {
        setIsSave(!isSave);
    };

    return (
        <div>
            <div className="flex items-center justify-center pt-5 m-auto bg-gray-100 ">
                <div className="container max-w-sm bg-white rounded shadow-lg ">
                    <div>
                        <h1 className="py-3 mt-2 ml-4 text-2xl font-bold text-gray-800 transition duration-100 cursor-pointer hover:text-gray-900">{title}</h1>
                    </div>
                    <img className="w-full border rounded cursor-pointer border-inherit" src={imgUrl} alt="This is Post" />
                    <div className="flex justify-between p-4">
                        <div className="flex items-center space-x-2">
                            <img className="w-10 h-10 rounded-full" src={userProfile} alt="sara" />
                            <h2 className="font-bold text-gray-800 cursor-pointer">{username}</h2>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex items-center space-x-1">
                                <button onClick={() => setShowModal(true)}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 cursor-pointer h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </span>
                                </button>
                                <span>{commentsCount}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>
                                    <button onClick={OnLike} className='m-1'>
                                        {isLike ? (<img src={notliked} className='h-7 w-7' />) : (<img src={liked} className='h-7 w-7' />)
                                        }
                                    </button>
                                </span>
                                <span>{likes}</span>
                            </div>
                        </div>
                    </div>
                    <p className="mt-1 mb-2 ml-4 text-gray-700 cursor-pointer ">{caption}</p>
                </div>
            </div>
            <hr className="mx-5 my-8 mb-2 h-0.2 bg-gray-400" />
            <Comments onClose={handleOnClose} visible={showModal} key={username} comments={comments}/>
        </div>
    )

}

export default NewPostCard
