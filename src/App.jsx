import { useState } from "react";

import "./App.css";
import { PersonalInfo } from "./Components/PersonalInfo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  return (
    <>
      <h2>First Name: {firstName}</h2>
      <h2>Last Name: {lastName}</h2>
      <PersonalInfo
        FirstNameChange={handleFirstNameChange}
        LastNameChange={handleLastNameChange}
      />
    </>
  );
}

export default App;
