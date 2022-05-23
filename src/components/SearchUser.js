import React, { useRef, useState } from "react";
import classes from "./SearchUser.module.css";

const SearchUser = function (props) {
  //#getting search query and passing to parent component

  //   const [userName, setUserName] = useState("");
  const inputRef = useRef();
  const inputHandler = function (e) {
    // setUserName(e.target.value);
    // props.onUserSearch(userName);
    const value = inputRef.current.value;
    props.onUserSearch(value);
  };
  return (
    <>
      <input
        className={classes["search-input"]}
        type="text"
        placeholder="Search..."
        onChange={inputHandler}
        ref={inputRef}
      ></input>
    </>
  );
};

export default SearchUser;
