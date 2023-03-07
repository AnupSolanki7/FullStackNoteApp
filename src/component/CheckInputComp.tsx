import React, { useState } from "react";
import { BiMinusCircle } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const CheckInputComp = ({ setCheckList, checkList, index }: any) => {
  const [checkInputData, setCheckInputData] = useState({ id:"", description: "" });
  const [isListAdd, setIsListAdd] = useState(true);


  const handleAddCheck = () => {
    setCheckList([...checkList, checkInputData]);
    setIsListAdd(false);
  };

  const handleFilter = (id:any) => {
    setCheckList(checkList.filter((e:any) => e.id !== id))
    setIsListAdd(true)
  }

  return (
    <span className="check-add-div">
      <input
        className="check-input"
        type="text"
        onChange={(e: any) =>
          setCheckInputData({ ...checkInputData, id: index+2 ,description: e.target.value })
        }
        placeholder="type description..."
      />
      {isListAdd ? (
        <MdOutlineAddCircleOutline onClick={handleAddCheck} />
      ) : (
        <BiMinusCircle onClick={() => handleFilter(index+2)} />
      )}
    </span>
  );
};

export default CheckInputComp;
