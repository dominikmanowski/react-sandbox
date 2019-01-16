import React from "react";

const UsersList = ({ users }) => {
  return users.length ? (
    users.map(user => <li key={user}>{user}</li>)
  ) : (
    <p>No matches</p>
  );
};

export default UsersList;
