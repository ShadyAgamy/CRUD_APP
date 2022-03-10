import React, { useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import EntryList from "./entries/EntryList";
import EntryCreate from "./entries/EntryCreate";
import EntryEdit from "./entries/EntryEdit";

import { fetchEntries } from "../actions";
import {useDispatch } from "react-redux";

import history from "../history";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntries());
  }, []);
  return (
    <div className=" container mt-4">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={EntryList} />
            <Route path="/entries/list" exact component={EntryList} />
            <Route path="/entries/new" exact component={EntryCreate} />
            <Route path="/entries/edit/:id" exact component={EntryEdit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
