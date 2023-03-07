import { message, Popconfirm } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiMinusCircle } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { checkArray, refresh } from "../redux/checkList";
import {
  checkNoteCreate,
  deleteCheckList,
  getCheckList,
  isListChecked,
  searchData,
} from "../redux/services";
import CheckInputComp from "./CheckInputComp";
import SearchList from "./SearchList";

const CheckList = () => {
  const [checkList, setCheckList]: any = useState([1]);
  const [checkInputData, setCheckInputData] = useState({
    id: 1,
    description: "",
  });
  const [checkAPIdata, setCheckAPIdata]: any = useState("");
  const [isListAdd, setIsListAdd] = useState(true);
  const checkListReducer = useSelector((state: any) => state.CheckList);
  const dispatch = useDispatch();

  useEffect(() => {
    getCheckListData();
  }, [checkListReducer.refresh]);

  const getCheckListData = async () => {
    const result = await getCheckList().then((res) => {
      dispatch(checkArray(res.data));
    });
  };

  const handleCheckBoxChange = (ele: any) => {
    isListChecked(ele.id, { isDone: !ele.isDone }).then((e: any) => {
      dispatch(refresh());
    });
  };

  const handleAddCheck = () => {
    setCheckList([...checkList, checkInputData]);
    setIsListAdd(false);
  };

  const handleSubmit = () => {
    const data = {
      title: checkAPIdata,
      checkData: checkList.slice(1),
    };
    if (checkAPIdata !== "" && checkList.length > 0) {
      checkNoteCreate(data).then((e: any) => {
        dispatch(refresh());
      });
    }
  };

  const confirm: any = (e: any) => {
    message.success("note deleted");
    deleteCheckList(e.id);
    dispatch(refresh());
  };

  const handleFilter = (id: any) => {
    setCheckList(checkList.filter((e: any) => e.id !== id));
    setIsListAdd(true);
  };

  return (
    <>
      <SearchList />
      <div className="note-div">
        <div className="create-note">
          <div className="note-card input-note">
            <input
              type="text"
              value={checkAPIdata}
              onChange={(e: any) => {
                setCheckAPIdata(e.target.value);
              }}
              placeholder="Enter title....."
            />
            <div className="check-box-div">

              {/* <span className="check-add-div">
                <input
                  className="check-input"
                  type="text"
                  value={checkInputData.description}
                  onChange={(e: any) => {
                    setCheckInputData({
                      ...checkInputData,
                      description: e.target.value,
                    });
                  }}
                  placeholder="type description..."
                />
                {isListAdd ? (
                  <MdOutlineAddCircleOutline onClick={handleAddCheck} />
                ) : (
                  <BiMinusCircle
                    onClick={() => handleFilter(checkInputData.id)}
                  />
                )}
              </span> */}

              {checkList?.map((e: any, index: any) => {
                return (
                  <CheckInputComp
                    setCheckList={setCheckList}
                    checkList={checkList}
                    index={index}
                  />
                );
              })}
            </div>

            <button
              className="add-btn"
              style={{ position: "absolute", right: "10px", bottom: "10px" }}
            >
              <RiAddFill onClick={handleSubmit} />
            </button>
          </div>
        </div>

        {checkListReducer.checkListArray.map((e: any) => {
          return (
            <div className="note-card">

              <h4> <Highlighter
                highlightClassName="YourHighlightClass"
                searchWords={[`${checkListReducer.value}`]}
                highlightStyle={{
                  backgroundColor: "orange",
                  borderRadius: "5px",
                }}
                autoEscape={true}
                textToHighlight={e.title}
              /></h4>
              <ul>
                {e.CheckedData.map((ele: any) => {
                  return (
                    <>
                      <li
                        style={{
                          textDecorationLine: ele.isDone
                            ? "line-through"
                            : "none",
                        }}
                      >
                        <input
                          onChange={() => {
                            handleCheckBoxChange(ele);
                          }}
                          className="check-box"
                          type="checkbox"
                          checked={ele.isDone}
                        /><Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={[`${checkListReducer.value}`]}
                        highlightStyle={{
                          backgroundColor: "orange",
                          borderRadius: "5px",
                        }}
                        autoEscape={true}
                        textToHighlight={ele.description}
                      />
                        
                        
                      </li>
                      <Popconfirm
                        title="Delete Note"
                        placement="rightBottom"
                        description="Are you sure to delete note?"
                        onConfirm={() => confirm(e)}
                        okText="Yes"
                        cancelText="No"
                      >
                        <AiTwotoneDelete className="edit-icon delete-icon" />
                      </Popconfirm>
                    </>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CheckList;
