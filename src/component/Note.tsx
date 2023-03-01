import React, { useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
import { BiCalendarEdit } from "react-icons/bi";
import { deleteNote, editNote } from "../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../redux/noteSlice";
import Highlighter from "react-highlight-words";

const Note = ({ data }: any) => {
  const [inputData, setInputData]: any = useState({
    title: data.title,
    description: data.description,
  });
  const inpValue = useSelector((state: any) => state.Note.value);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch: any = useDispatch();


  return (
    <div>
      <div className="note-card">
        {!isEdit ? (
          <TbEdit
            onClick={() => {
              setIsEdit(!isEdit);
            }}
            className="edit-icon"
          />
        ) : (
          ""
        )}{" "}
        {!isEdit ? (
          <>
            <h4>
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[`${inpValue}`]}
                highlightStyle={{backgroundColor:"orange", borderRadius:"5px"}}
                autoEscape={true}
                textToHighlight={data.title}
              />
            </h4>

            <p>
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[`${inpValue}`]}
                highlightStyle={{backgroundColor:"orange", borderRadius:"5px"}}
                autoEscape={true}
                textToHighlight={data.description}
              />
            </p>
            <MdOutlineDelete
              onClick={() => {
                deleteNote(data.id);
                dispatch(refresh());
              }}
              className="edit-icon delete-icon"
            />
          </>
        ) : (
          <>
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
            <button
              onClick={() => {
                editNote(data.id, inputData);
                dispatch(refresh())
                setIsEdit(false);
              }}
              className="add-btn edit-btn"
            >
              <BiCalendarEdit style={{}} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
