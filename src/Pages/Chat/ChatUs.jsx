import React, { useContext, useEffect, useState } from 'react';
import socketIoClient from 'socket.io-client';
import { AuthContext } from '../../providers/AuthProvider';
import { ChatBoxReciever, ChatBoxSender } from './ChatBox';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatUs = () => {
    const { user } = useContext(AuthContext)
    let socketIO = socketIoClient(`${baseUrl}`)
    const [massage, setMassage] = useState('')
    const name = user?.displayName;
    const [chats, setChats] = useState([])
    useEffect(() => {
        socketIO.on('chat', senderChats => {
            setChats(senderChats)
        })
    }, [])

    function sendChatToSocket(chat) {
        socketIO.emit("chat", chat)
    }
    function addMessage(chat) {
        const newChat = { ...chat, name }
        setChats([...chats, newChat])
        sendChatToSocket([...chats, newChat])
    }
    const addAMessage = () => {
        if(massage==''){
            return
        }

        addMessage({
            massage
        })
        setMassage('')

        document.getElementById('massage').value = ''

    }
    function ChatsList() {
        return (<div className='' >
            {
                chats?.map((chat, index) => {
                    if (chat.name === name) return <ChatBoxSender key={index} massage={chat.massage} name={chat.name} />
                    return <ChatBoxReciever key={index} massage={chat.massage}
                        name={chat.name} />
                })
            }

        </div>)

    }
    // console.log(chats)
    return (
        <div className='w-full'>
            <>
                <div className="card w-96  glass mx-auto mt-10">
                    <p className='pl-4 py-4 w-full bg-sky-600 text-white font-bold text-2xl'>Live Chat</p>



                    <ScrollToBottom className='h-96 '>

                        {
                            ChatsList()
                        }

                    </ScrollToBottom>
                    <div className='flex  mt-2'>
                        <textarea
                            onChange={(e) => { setMassage(e.target.value) }}
                            placeholder='write here '
                            value={massage}
                            className='h-10 w-full pl-4 border border-sky-700 mb-0'
                            type="text" />
                        <button
                            onClick={addAMessage}

                            className='hover:bg-sky-300 bg-sky-600 text-white py-2 px-4 h-10'>send</button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default ChatUs;