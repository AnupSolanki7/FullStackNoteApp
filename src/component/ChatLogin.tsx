import styles from "../styles/styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../redux/chat";

const ChatLogin = ({ socket }: any) => {
  const [username, setUsername]:any = useState(""); // Add this
  const [room, setRoom]:any = useState(""); // Add this
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", { username, room });
      const data:any = { user: username, room: room }
      dispatch(setData(data));
    }
    navigate("/chatRoom", { replace: true } );
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1>{`<>DevRooms</>`}</h1>
        <input
          className={styles.input}
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          className={styles.input}
          onChange={(e) => setRoom(e.target.value)}
        >
          <option>-- Select Room --</option>
          <option value="javascript">JavaScript</option>
          <option value="node">Node</option>
          <option value="express">Express</option>
          <option value="react">React</option>
        </select>

        <button
          className="btn btn-secondary"
          style={{ width: "100%" }}
          onClick={() => joinRoom()}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default ChatLogin;
