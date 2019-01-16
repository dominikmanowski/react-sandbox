import React, { Component } from "react";
import UsersList from "../UsersList";

const allUsers = ["Ula", "Ala", "Basia", "Maryla", "Mirek", "Janusz"];

class UsersListView extends Component {
  state = {
    filteredUsers: allUsers
  };

  getFilteredUsersForText(text) {
    return allUsers.filter(user =>
      user.toLowerCase().includes(text.toLowerCase())
    );
  }

  filterUsers(e) {
    const text = e.currentTarget.value;
    const filteredUsers = this.getFilteredUsersForText(text);
    this.setState({
      filteredUsers
    });
  }

  render() {
    return (
      <>
        <input type="text" onInput={this.filterUsers.bind(this)} />
        <UsersList users={this.state.filteredUsers} />
      </>
    );
  }
}

export default UsersListView;
