import React from 'react';
import notification from "../assets/notification.svg";
import chat from "../assets/chat.svg"
import trending from "../assets/trending.svg"
import logo from "../assets/logo.png"
import  {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigate=useNavigate();

    return (
        <>
            <div>
                {/* Header */}
                <header className="flex items-center justify-between">
                    <div className="logo float-left"><img src={logo} alt="logo" className="w-14 mx-1 ml-2" /></div>
                    <div className="flex justify-end">
                        <div className="trend w-7 h-7 m-auto" onClick={() => navigate("/trending")}><img src={trending} alt="trending" /></div>
                        <div className="notification w-7 h-7 m-1" onClick={() => navigate("/notification")}><img src={notification} alt="notify" /></div>
                        <div className="chat w-7 h-7 mr-1 my-auto" onClick={() => navigate("/chat")}><img src={chat} alt="chat" /></div>
                    </div>
                </header>
                <hr className="m-1" />
                {/* Middle */}
                <main>
                    <div className="random-post m-2">Random Post Work</div>
                </main>

                {/* Footer */}
            </div>
        </>
    );
}


export default HomePage;
