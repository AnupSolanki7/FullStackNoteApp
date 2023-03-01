import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notesData, refresh } from "../redux/noteSlice";
import { CgFolderAdd } from "react-icons/cg";
import { getNotes, postNote } from "../redux/services";
import Note from "./Note";
import SearchComponent from "./SearchComponent";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData]: any = useState({
    title: "",
    description: "",
  });
  const noteReducer = useSelector((state: any) => state);

  useEffect(() => {
    getNotesArray();
  }, [noteReducer.Note.refresh]);

  const getNotesArray = async () => {
    const result: any = await getNotes();
    dispatch(notesData(result.data));
  };

  const addNote = async () => {
    if (inputData.title !== "") {
      await postNote(inputData);
      dispatch(refresh());
      setInputData({
        title: "",
        description: "",
      });
    }
  };

  const token: any = localStorage.getItem("full_stack_app_user");
  const decoded: any = jwt_decode(token);

  return (
    <>
      <SearchComponent />
      <div className="note-div">
        {noteReducer.Note.value.length > 0 ? (
          <></>
        ) : (
          <div className="create-note">
            <div className="note-card input-note">
              <input
                value={inputData.title}
                onChange={(e: any) =>
                  setInputData({ ...inputData, title: e.target.value })
                }
                type="text"
                placeholder="Enter title....."
              />
              <textarea
                value={inputData.description}
                onChange={(e: any) =>
                  setInputData({ ...inputData, description: e.target.value })
                }
                name=""
                id=""
                placeholder="Enter description....."
              ></textarea>
              <button className="add-btn" onClick={addNote}>
                <CgFolderAdd />
              </button>
            </div>
          </div>
        )}

        {noteReducer.Note.notes.map((e: any) => {
          return (
            <>
              <Note data={e} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
