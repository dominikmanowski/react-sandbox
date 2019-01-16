import React, { Component } from "react";
import ContactsView from "../ContactsView";

class ContactsApp extends Component {
  state = { contacts: null };

  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(data => this.setState({ contacts: data.results }));
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <main>
        {contacts ? <ContactsView contacts={contacts} /> : "Loading..."}
      </main>
    );
  }
}

export default ContactsApp;
