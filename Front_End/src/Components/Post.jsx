import React, { Component } from 'react'

export class Post extends Component {

    render() {
        let {username,likes,comments,imgUrl,caption,userProfile,title} = this.props


        if(likes>1000 & likes<1000000){
            likes=likes/1000
            likes= likes.toFixed(1)
            likes += "k"}
        else if(likes>1000000){
            likes=likes/1000000
            likes= likes.toFixed(1)
            likes+= "M"}

        
        return (
            <div>
                <div className="flex items-center justify-center pt-5 m-auto bg-gray-100 ">
                    <div className="container max-w-xs transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl">
                        <div>
                            <span className="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">Home</span>
                            <h1 className="mt-2 ml-4 text-2xl font-bold text-gray-800 transition duration-100 cursor-pointer hover:text-gray-900">{title}</h1>
                            <p className="mt-1 mb-2 ml-4 text-gray-700 cursor-pointer hover:underline">{caption}</p>
                        </div>
                        <img className="w-full cursor-pointer" src={imgUrl} alt="" />
                        <div className="flex justify-between p-4">
                            <div className="flex items-center space-x-2">
                                <img className="w-10 h-10 rounded-full" src={userProfile} alt="sara" />
                                <h2 className="font-bold text-gray-800 cursor-pointer">{username}</h2>
                            </div>
                            <div className="flex space-x-2">
                                <div className="flex items-center space-x-1">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 cursor-pointer h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </span>
                                    <span>{comments}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="text-red-500 transition duration-100 cursor-pointer h-7 w-7 hover:text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span>{likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mx-5 my-8 mb-2 h-0.2 bg-gray-400"/>
            </div>
        )
    }
}

export default Post
