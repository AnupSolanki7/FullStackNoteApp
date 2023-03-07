import axios from "axios";
import { searchedNotes } from "./noteSlice";

let user = localStorage.getItem("full_stack_app_user");
user = user ? JSON.parse(user) : null;

export const userLogin = async (data: any) => {
  const result: any = await axios.post(
    "http://192.168.1.200:8000/api/users/login",
    data
  );
  return result;
};

export const getNotes = async () => {
  const result: any = await axios
    .get("http://192.168.1.200:8000/api/notes/getnotes", {
      headers: {
        "Content-Type": "application/json",
        authorization: user,
      },
    })
    .then((res) => {
      return res;
    });

  return result;
};

export const postNote = async (data: any) => {
  const result: any = await axios
    .post("http://192.168.1.200:8000/api/notes/createnote", data, {
      headers: {
        "Content-Type": "application/json",
        authorization: user,
      },
    })
    .then((res) => {
      return res;
    });

  return result;
};

export const deleteNote = async (id: any) => {
  const result: any = await axios.delete(
    `http://192.168.1.200:8000/api/notes/deleteNote/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: user,
      },
    }
  );
};

export const editNote = async (id: any, data: any) => {
  const result: any = await axios.put(
    `http://192.168.1.200:8000/api/notes/editNote/${id}`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: user,
      },
    }
  );
};

export const searchNote = async (data: any) => {
  const result: any = await axios.post(
    `http://localhost:8000/api/notes/searchNote`,
    data,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: user,
      },
    }
  );

  return result;
};



export const getCheckList = async () => {
  const result: any = await axios.get("http://localhost:8000/api/checklist/getchecklist", {
    headers: {
      "Content-Type": "application/json",
      authorization: user,
    },
  })

  return result;
};




export const isListChecked = async (id:any, data:any) => {
  const result: any = await axios.put(`http://localhost:8000/api/checkedData/isChecked/${id}`, data ,{
    headers: {
      "Content-Type": "application/json",
      authorization: user,
    },
  })

  return result;
};


export const checkNoteCreate = async ( data:any) => {
  const result: any = await axios.post(`http://localhost:8000/api/checklist/createCheckList`, data ,{
    headers: {
      "Content-Type": "application/json",
      authorization: user,
    },
  })

  return result;
};


export const deleteCheckList = async ( id:any) => {
  const result: any = await axios.delete(`http://localhost:8000/api/checklist/deleteList/${id}`,{
    headers: {
      "Content-Type": "application/json",
      authorization: user,
    },
  })

  return result;
};


export const searchData = async ( word:any) => {
  const result: any = await axios.post(`http://localhost:8000/api/checklist/searchList`, {word:word},{
    headers: {
      "Content-Type": "application/json",
      authorization: user,
    },
  })

  return result;
};