import React from 'react';
import notification from "../assets/notification.svg";
import chat from "../assets/chat.svg"
import trending from "../assets/trending.svg"
import logo from "../assets/logo.png"

const HomePage = () => {
    return (
        <>
            <div>
                {/* Header */}
                <header className="flex items-center justify-between">
                    <div className="logo float-left"><img src={logo} alt="logo" className="w-14 mx-1" /></div>
                    <div className="flex justify-end">
                        <div className="trend w-7 h-7 m-auto"><img src={trending} alt="trending" /></div>
                        <div className="notification w-7 h-7 m-1"><img src={notification} alt="notify" /></div>
                        <div className="chat w-7 h-7 mr-1 my-auto"><img src={chat} alt="chat" /></div>
                    </div>
                </header>
                <hr />
                {/* Middle */}
                <main>
                    <div className="random-post m-2">Random Post</div>
                </main>

                {/* Footer */}
            </div>
        </>
    );
}

export default HomePage;
