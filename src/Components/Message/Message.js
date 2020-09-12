import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Message.css'
import { useEffect } from 'react';



const Message = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            username: 'Nafis',
            message: 'hi'
        }]);
    const sendMessage = (e) => {
        e.preventDefault();
        setMessages([...messages, { username: userName, message: input }]);
        setInput('');

    }
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setUserName(prompt('Enter Your UserName'))

    }, [])
        const isUser = userName === messages.username;


    
    return (

        <div>

            <form>
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Your Text" />
                <button className="btn" onClick={sendMessage} type='submit'>Send</button>
            </form>
            {
                messages.map(chat => <div className={isUser ? "msg-card-user" : "msg-card"}><p>{chat.username} : {chat.message}</p></div>)

            }
        </div>
    );
};

export default Message;