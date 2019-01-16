import React from "react";

const ContactView = ({ avatarUrl, name, phone }) => {
  return (
    <li>
      <img src={avatarUrl} alt="" />
      <div>
        <h4>{name}</h4>
        <span>{phone}</span>
      </div>
    </li>
  );
};

export default ContactView;
