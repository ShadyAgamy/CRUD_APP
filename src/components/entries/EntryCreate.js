import React from "react";
import { createEntry } from "../../actions";
import EntryForm from "./EntryForm";
import {  useDispatch } from "react-redux";
const EntryCreate = () => {
    const dispatch = useDispatch();
  const onSubmit = (formValues) => {
    dispatch(createEntry(formValues)) ;
  };

  return (
    <div>
      <h3>Create An Entry</h3>
      <EntryForm onSubmit={onSubmit} />
    </div>
  );
};

export default EntryCreate;
