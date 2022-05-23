import React from "react";
import classes from "./UserList.module.css";
const User = function (props) {
  return (
    <>
      <li className={classes.item}>
        <span className={classes.entries}>{props.fName}</span>
        <span className={classes.entries}>{props.lName}</span>
        <span className={classes.entries}>{props.email}</span>
      </li>
    </>
  );
};

export default User;
