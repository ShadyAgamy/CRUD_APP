import entries from "../apis/entries";
import { CREATE_ENTRY, FETCH_ENTRIES, DELETE_ENTRY, EDIT_ENTRY } from "./types";
import history from "../history";

export const createEntry = (formValues) => (dispatch) => {
  dispatch({
    type: CREATE_ENTRY,
    payload: formValues,
  });
  history.push("/");
};

export const fetchEntries = () => async (dispatch) => {
  const response = await entries.get("/entries");
  dispatch({
    type: FETCH_ENTRIES,
    payload: response.data,
  });
};

export const editEntry = (id, formValues) => (dispatch) => {
  dispatch({
    type: EDIT_ENTRY,
    payload: { id, formValues },
  });
  history.push("/");
};

export const deleteEntry = (id) => (dispatch) => {
  dispatch({
    type: DELETE_ENTRY,
    payload: id,
  });
};
