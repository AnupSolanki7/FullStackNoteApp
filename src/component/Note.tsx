import React, { useState } from "react";
import { TbEditCircle } from "react-icons/tb";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiCalendarEdit } from "react-icons/bi";
import { deleteNote, editNote } from "../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../redux/noteSlice";
import Highlighter from "react-highlight-words";
import { message, Popconfirm } from "antd";
import NoteViewModal from "./NoteViewModal";

const Note = ({ data }: any) => {
  const [inputData, setInputData]: any = useState({
    title: data.title,
    description: data.description,
  });
  const inpValue = useSelector((state: any) => state.Note.value);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch: any = useDispatch();

  const confirm: any = (e: React.MouseEvent<HTMLElement>) => {
    message.success("note deleted");
    deleteNote(data.id);
    dispatch(refresh());
  };

  return (
    <div>
      <div className="note-card">
        {!isEdit ? (
          // <TbEditCircle
          //   onClick={() => {
          //     setIsEdit(!isEdit);
          //   }}
          //   className="edit-icon"
          // />
          <NoteViewModal data={data} inpValue={inpValue} />
        ) : (
          ""
        )}{" "}
        {!isEdit ? (
          <>
            <h4>
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[`${inpValue}`]}
                highlightStyle={{
                  backgroundColor: "orange",
                  borderRadius: "5px",
                }}
                autoEscape={true}
                textToHighlight={data.title}
              />
            </h4>

            <p>
              <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[`${inpValue}`]}
                highlightStyle={{
                  backgroundColor: "orange",
                  borderRadius: "5px",
                }}
                autoEscape={true}
                textToHighlight={data.description}
              />
            </p>
            <Popconfirm
              title="Delete Note"
              placement="rightBottom"
              description="Are you sure to delete note?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <AiTwotoneDelete className="edit-icon delete-icon" />
            </Popconfirm>
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
                dispatch(refresh());
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
