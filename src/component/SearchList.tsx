import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { checkArray, checkValue } from "../redux/checkList";
import { searchData } from "../redux/services";


const SearchList = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue]:any = useState("")

    const handleSearch = async (value:any) => {
        setSearchValue(value)
        const result = await searchData(value)
        dispatch(checkArray(result.data))
        dispatch(checkValue(value))
    }

  return (
    <div className="fixed-search">
      <div className="search-div">
        <div className="input-div">
          <RiSearch2Line />
          <input type="text" value={searchValue} onChange={(e:any) => { handleSearch(e.target.value)}} />
        </div>
        <span>
          <p>search </p>
        </span>
      </div>
    </div>
  );
};

export default SearchList;
