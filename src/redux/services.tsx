import axios from "axios";
import { searchedNotes } from "./noteSlice";

export const userLogin = async (data: any) => {
  const result: any = await axios.post(
    "http://192.168.1.200:8000/api/users/login",
    data
  );
  return result;
};

export const getNotes = async () => {
  const result: any = await axios
    .get("http://192.168.1.200:8000/api/notes/getnotes")
    .then((res) => {
      return res;
    });

  return result;
};

export const postNote = async (data: any) => {
  const result: any = await axios
    .post("http://192.168.1.200:8000/api/notes/createnote", data)
    .then((res) => {
      return res;
    });

  return result;
};

export const deleteNote = async (id: any) => {
  const result: any = await axios.delete(
    `http://192.168.1.200:8000/api/notes/deleteNote/${id}`
  );
};

export const editNote = async (id: any, data: any) => {
  const result: any = await axios.put(
    `http://192.168.1.200:8000/api/notes/editNote/${id}`,
    data
  );
};

export const searchNote = async (data: any) => {
  const result: any = await axios.post(
    `http://localhost:8000/api/notes/searchNote`,
    data
  );

  return result
};
