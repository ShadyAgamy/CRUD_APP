import _ from "lodash";
import React, { useEffect } from "react";
import { editEntry } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import EntryForm from "./EntryForm";

const EntryEdit = (props) => {
  const dispatch = useDispatch();

  const entry = useSelector((state) =>
    state.entries.find(
      (x) => parseInt(x.id) === parseInt(props.match.params.id)
    )
  );

  useEffect(() => {}, []);

  const onSubmit = (formValues) => {
    dispatch(editEntry(props.match.params.id, formValues));
  };

  return (
    <div>
      <h3>Edit Entry</h3>
      <EntryForm
        initialValues={_.pick(
          entry,
          "API",
          "Auth",
          "Category",
          "Description",
          "Link"
        )}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default EntryEdit;
