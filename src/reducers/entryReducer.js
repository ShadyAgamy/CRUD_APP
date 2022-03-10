import {
  CREATE_ENTRY,
  FETCH_ENTRIES,
  DELETE_ENTRY,
  EDIT_ENTRY,
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    default:
      return state;
    case CREATE_ENTRY:
      const [lastItem] = state.slice(-1);
      return [...state, { ...action.payload, id: lastItem.id + 1 }];
    case EDIT_ENTRY:
      const updatedState = state.map((x) =>
        parseInt(x.id) === parseInt(action.payload.id)
          ? { ...x, ...action.payload.formValues }
          : x
      );
      return [...updatedState];
    case DELETE_ENTRY:
      const id = action.payload;
      const newState = state.filter((entry) => {
        return entry.id !== id;
      });
      return [...newState];
    case FETCH_ENTRIES:
      action.payload.entries.forEach((entry, index) => {
        return (entry.id = index);
      });
      return [...state, ...action.payload.entries];
  }
};
