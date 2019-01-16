import React, { Component } from "react";
import ContactView from "../ContactView";

class ContactsView extends Component {
  state = { contacts: null };

  contactToContactItem = contact => {
    const avatarUrl = contact.picture.thumbnail;
    const { title, first, last } = contact.name;
    const name = `${title} ${first} ${last}`.trim();
    const phone = contact.phone;
    const key = contact.login.username;
    return (
      <ContactView key={key} avatarUrl={avatarUrl} name={name} phone={phone} />
    );
  };

  render() {
    return <ul>{this.props.contacts.map(this.contactToContactItem)}</ul>;
  }
}

export default ContactsView;
