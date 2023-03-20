import { useEffect } from 'react';
import styles from '../styles/styles.module.css';
import Messages from './Messages'
import RoomData from './RoomData';
import SendMessage from './SendMessgaes';



const ChatRoom = ({socket}:any) => {
  const data:any = localStorage.getItem("ChatUser")
  const userData:any = JSON.parse(data)
  const username= userData.user
  const room = userData.room

  useEffect(() => {
    const __createdtime__ = Date.now();
    socket.emit('leave_room', { username, room, __createdtime__ });
    socket.emit("join_room", { username, room });
  },[])

  return (
    <div className={styles.chatContainer}>
      <RoomData socket={socket} room={room}/>
      <div>
        <Messages socket={socket} username={username} room={room} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  )
}

export default ChatRoom