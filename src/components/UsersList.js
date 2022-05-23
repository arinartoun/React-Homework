import React from "react";
import User from "./User";
import classes from "./UserList.module.css";

const UserList = function (props) {
  return (
    <>
      <ul>
        <li className={`${classes.item} ${classes["header-entries"]}`}>
          <span className={classes.entries}>Name</span>
          <span className={classes.entries}>Surname</span>
          <span className={classes.entries}>Email</span>
        </li>
        {props.users.map((user) => (
          <User
            fName={user.fName}
            lName={user.lName}
            email={user.email}
            key={user.id}
          />
        ))}
      </ul>
    </>
  );
};

export default UserList;
