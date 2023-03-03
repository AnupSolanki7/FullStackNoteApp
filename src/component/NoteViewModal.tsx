import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { GrFormView } from "react-icons/gr";
import { Modal } from "antd";
import { deleteNote, editNote } from "../redux/services";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../redux/noteSlice";
import Highlighter from "react-highlight-words";

const NoteViewModal = ({ data, inpValue }: any) => {
  const dispatch: any = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [noteViewModal, setNoteViewModal] = useState(false);
  const [inputData, setInputData]: any = useState({
    title: data.title,
    description: data.description,
  });

  return (
    <>
      <GrFormView className="edit-icon" onClick={() => setNoteViewModal(true)} />
      <Modal
        open={noteViewModal}
        onOk={() => setNoteViewModal(false)}
        onCancel={() => setNoteViewModal(false)}
      >
        <div className="note-view">
          <FiEdit3
            className="edit-icon"
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          />
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
            </>
          ) : (
            <>
              <textarea
                value={inputData.title}
                onChange={(e: any) =>
                  setInputData({ ...inputData, title: e.target.value })
                }
                className="input"
                placeholder="Enter title....."
              />
              <textarea
                value={inputData.description}
                onChange={(e: any) =>
                  setInputData({ ...inputData, description: e.target.value })
                }
                className="textarea"
                name=""
                id=""
                placeholder="Enter description....."
              ></textarea>
              {
                isEdit ? <button
                onClick={() => {
                  editNote(data.id, inputData);
                  dispatch(refresh());
                  setIsEdit(false);
                }}
                className="add-btn edit-btn"
              >
                done
              </button> : null
              }
              
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default NoteViewModal;
