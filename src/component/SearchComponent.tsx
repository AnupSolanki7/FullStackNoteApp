import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { searchedNotes, searchedValue } from "../redux/noteSlice";
import { searchNote } from "../redux/services";

const SearchComponent = () => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue]:any = useState("")

    const handleSearch = async (value:any) => {
        setSearchValue(value)
        const result = await searchNote({word:value})
        dispatch(searchedNotes(result.data.data))
        dispatch(searchedValue(value))
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

export default SearchComponent;
