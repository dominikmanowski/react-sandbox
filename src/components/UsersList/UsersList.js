import React from "react";

const UsersList = ({ users, userSelected }) => {
  return users.length ? (
    users.map(user => (
      <li onClick={() => userSelected(user)} key={user}>
        {user}
      </li>
    ))
  ) : (
    <p>No matches</p>
  );
};

export default UsersList;
