import React, { Component } from "react";
import SimpleForm from "./components/SimpleForm";
import Clock from "./components/Clock";
import UsersListView from "./components/UsersListView";

class App extends Component {
  render() {
    return (
      <>
        <SimpleForm />
        <Clock />
        <UsersListView />
      </>
    );
  }
}

export default App;
