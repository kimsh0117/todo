import React from "react";
import Layout from "./components/layout/Layout";
import { Todo } from "./features/todo/Todo";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Todo name="오늘 할일"/>
        </Route>
        <Route exact path="/important">
          <Todo name="중요"/>
        </Route>
        <Route exact path="/planned">
          <Todo name="계획된 일정"/>
        </Route>
        <Route exact path="/deleted">
          <Todo name="삭제된 작업"/>
        </Route>
        <Route exact path="/task">
          <Todo name="작업"/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
