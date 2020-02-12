import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Block, Text, Input, Button, Header } from "./components";
import { Users, ToDoList } from "./pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import FetchAsync from "./pages/apiCall";

const App = () => {
  return (
    <>
      <GlobalStyles />

      {/* <Route exact path="/Menu">
        <Users />
        <Button>AAAA</Button>
        <Input />
      </Route> */}
      <Header />
      <Switch>
        <Route exact path="/UserList" component={Users} />
        <Route exact path="/ToDoList" component={ToDoList} />
      </Switch>

      {/* <Route exact path="/Header">
        
      </Route> */}
    </>
  );
};
export default App;
