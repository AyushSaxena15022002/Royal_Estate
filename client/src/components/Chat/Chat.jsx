import React, { useContext, useEffect, useRef, useState } from 'react'
import './Chat.scss'
// import { userData } from '../../lib/dummydata'
import { AuthContext } from '../../context/AuthContext'
import apiRequest from '../../lib/apiRequest'
import { format } from 'timeago.js'
import { SocketContext } from '../../context/SocketContext'

function Chat({ chats }) {
  const [chat, setChat] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const { socket } = useContext(SocketContext)

  const messageEndRef = useRef()

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chat])

  const handleOpenChat = async (id, reciever) => {
    try {
      const res = await apiRequest('/chats/' + id)
      setChat({ ...res.data, reciever })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const text = formData.get('text')

    if (!text) return
    try {
      const res = await apiRequest.post('/messages/' + chat.id, { text })

      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }))

      e.target.reset()
      socket.emit('sendMessage', {
        recieverId: chat.reciever.id,
        data: res.data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const read = async () => {
      try {
        await apiRequest.put('/chats/read/' + chat.id)
      } catch (error) {
        console.log(error)
      }
    }

    if (chat && socket) {
      socket.on('getMessage', (data) => {
        if (chat.id === data.chatId) {
          setChat((prev) => ({ ...prev, mmessages: [...prev.messages, data] }))
          read()
        }
      })
    }

    return () => {
      socket.off('getMessage')
    }
  }, [chat, socket])

  return (
    <div className='chat'>
      <div className='messages'>
        <h1>Messages</h1>
        {chats?.map((c) => (
          <div
            className='message'
            key={c.id}
            style={{
              backgroundColor:
                c.seenBy.includes(currentUser.id) || chat?.id === c.id
                  ? 'white'
                  : '#fecd514e',
            }}
            onClick={() => handleOpenChat(c.id, c.reciever)}
          >
            <img src={c.reciever.avatar || '/noavatar.jpg'} alt='' />
            <span>{c.reciever.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className='chatBox'>
          <div className='top'>
            <div className='user'>
              <img src={chat.reciever?.avatar || 'noavatar.jpg'} alt='' />
              <span>{chat.reciever.username}</span>
            </div>
            <span className='close' onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className='center'>
            {chat.messages.map((message) => (
              <div
                className='chatMessage'
                key={message.id}
                style={{
                  alignSelf:
                    message.userId === currentUser.id
                      ? 'flex-end'
                      : 'flex-start',
                  textAlign:
                    message.userId === currentUser.id ? 'right' : 'left',
                }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form className='bottom' onSubmit={handleSubmit}>
            <textarea name='text'></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Chat
