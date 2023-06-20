import React,{useState} from 'react';
import notification from "../assets/notification.svg";
import chat from "../assets/chat.svg"
import trending from "../assets/trending.svg"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import PostCard from './PostCard';
import NewPostCard from './NewPostCard';
import Posts from "./randPost.json";



const HomePage = () => {
        const navigate = useNavigate();
        return (
            <>
                <div className="bg-gray-100">
                    {/* Header */}
                    <div className='fixed z-20 bg-gray-100'>
                        <header id='header' className="flex items-center justify-between w-screen p-1">
                            <div className="float-left logo"><img src={logo} alt="logo" className="px-1 ml-1 w-15" /></div>
                            <div className="flex justify-end pr-1.5">
                                <div className="m-auto trend w-7 h-7" onClick={() => navigate("/trending")}><img src={trending} alt="trending" /></div>
                                <div className="m-1 notification w-7 h-7" onClick={() => navigate("/notification")}><img src={notification} alt="notify" /></div>
                                <div className="my-auto chat w-7 h-7" onClick={() => navigate("/chat")}><img src={chat} alt="chat" /></div>
                            </div>
                        </header>
                        <hr className="mx-2 my-1 mb-2 bg-black-900" />
                    </div>
                    {/* Middle */}
                    <div className="pt-16">
                        {Posts?.map((post)=>(
                            <NewPostCard key={post.id} username={post.username} title={post.title} likes={post.likes} comments ={post.comments} imgUrl={post.link} caption={post.caption} userProfile={post.userprofile}/>
                        ))}
                        <div className="h-14"></div>
                    </div>
                    {/* Footer */}

                </div>
            </>
        );
    }


    export default HomePage;