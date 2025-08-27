import React, { useEffect, useState } from 'react'
import { useAppContext } from '../Context/AppContext.jsx'
import { assets } from '../assets/assets';
import Message from './Message.jsx';

export default function Chatbox() {
    const { selectChat, theme } = useAppContext();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (selectChat) {
            setMessages(selectChat.messages || []);
        } else {
            setMessages([]);
        }
    }, [selectChat]);

    return (
        <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:m-30 max-md:mt-14 2xl:pr-40'>

            {/* Chat Messages */}
            <div className='flex-1 mb-5 overflow-y-scroll'>
                {messages.length === 0 && (
                    <div className='h-full flex flex-col items-center justify-center gap-2 text-primary'>
                        <img
                            src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark}
                            className='w-full max-w-56 sm:max-w-68'
                            alt="logo"
                        />
                        <p className='mt-5 text-4xl sm:text-6xl text-center text-gray-400 dark:text-white'>
                            ask me anything
                        </p>
                    </div>
                )}

                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </div>

            {/* Prompt input (to be implemented later) */}
            <form onSubmit={(e) => e.preventDefault()}>
                {/* Add textarea + button later */}
            </form>
        </div>
    )
}
