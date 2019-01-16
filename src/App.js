import React, { Component } from "react";
import SimpleForm from "./components/SimpleForm";
import Clock from "./components/Clock";
import UsersListView from "./components/UsersListView";
import ContactsApp from "./components/ContactApp";

class App extends Component {
  render() {
    return (
      <>
        <SimpleForm />
        <Clock />
        <UsersListView />
        <ContactsApp />
      </>
    );
  }
}

export default App;
