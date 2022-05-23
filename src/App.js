import React, { useState } from "react";
import Card from "./components/Card";
import SearchUser from "./components/SearchUser";
import UserList from "./components/UsersList";
import "./App.css";

const App = function () {
  const users = [
    {
      fName: "James",
      lName: "Gordon",
      email: "jamesGordon@gmail.com",
      id: "u01",
    },
    {
      fName: "Madeline",
      lName: "White",
      email: "M.White@gmail.com",
      id: "u02",
    },
    {
      fName: "Steve",
      lName: "Ramsey",
      email: "steveR@gmail.com",
      id: "u03",
    },
    {
      fName: "Sommer",
      lName: "Jackson",
      email: "SomJack@gmail.com",
      id: "u04",
    },
    {
      fName: "Sam",
      lName: "Malek",
      email: "MalekS@gmail.com",
      id: "u05",
    },
    {
      fName: "Mohammad",
      lName: "Jajrudi",
      email: "mamadJajrudi@gmail.com",
      id: "u06",
    },
  ];
  // # filtering users array
  const [filteredUsers, setFilteredUsers] = useState(users);
  const userSearchHandler = function (enteredName) {
    console.log(enteredName);
    if (enteredName === "") return setFilteredUsers(users);
    setFilteredUsers(
      users.filter((user) => {
        return [
          user.fName.toLocaleLowerCase(),
          user.fName,
          user.lName.toLocaleLowerCase(),
          user.lName,
          user.email.toLocaleLowerCase(),
          user.email,
        ].some((res) => res.includes(enteredName));
        // user.fName.toLocaleLowerCase().includes(enteredName) ||
        // user.lName.toLocaleLowerCase().includes(enteredName) ||
        // user.email.toLocaleLowerCase().includes(enteredName)
        // if (user.fName.toLocaleLowerCase().includes(enteredName)) return true;
        // if (user.lName.toLocaleLowerCase().includes(enteredName)) return true;
      })
    );
  };

  return (
    <>
      <Card className="header">
        <h1>Searchify</h1>
        <SearchUser onUserSearch={userSearchHandler} />
      </Card>

      <>
        <Card>
          <UserList users={filteredUsers} />
        </Card>
      </>
    </>
  );
};

export default App;
