// client/src/pages/chat/messages.js

import styles from "../styles/styles.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Messages = ({ socket, room }: any) => {
  const [messagesRecieved, setMessagesReceived]: any = useState([]);

  useEffect(() => {
    socket.on("last_100_messages", (data: any) => {
      data.map((e:any) => {
        setMessagesReceived((state: any) => [
          ...state,
          {
            message: e.message,
            username: e.username,
            __createdtime__: e.createdAt,
          },
        ]);
      })
      
    });
  }, []);

  // Runs whenever a socket event is recieved from the server
  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      setMessagesReceived((state: any) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__,
        },
      ]);
    });

    // Remove event listener on component unmount
    return () => socket.off("receive_message");
  }, [socket]);

  // dd/mm/yyyy, hh:mm:ss
  function formatDateFromTimestamp(timestamp: any) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div className={styles.messagesColumn}>
      {messagesRecieved.map((msg: any, i: any) => (
        <div className={styles.message} key={i}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span className={styles.msgMeta}>{msg.username}</span>
            <span className={styles.msgMeta}>
              {formatDateFromTimestamp(msg.__createdtime__)}
            </span>
          </div>
          <p className={styles.msgText}>{msg.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Messages;
