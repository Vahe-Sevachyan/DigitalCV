import { useState } from "react";

import "./App.css";
import { PersonalInfo } from "./Components/PersonalInfo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function HandlePhoneNumberChange(event) {
    setPhoneNumber(event.target.value);
  }
  return (
    <div className="mainDisplay">
      <div className="inputSection">
        <PersonalInfo
          FirstNameChange={handleFirstNameChange}
          LastNameChange={handleLastNameChange}
          EmailChange={handleEmailChange}
          PhoneNumberChange={HandlePhoneNumberChange}
        />
      </div>
      <div className="displaySection">
        <h2>First Name: {firstName}</h2>
        <h2>Last Name: {lastName}</h2>
        <h2>Email: {email}</h2>
        <h2>Phone Number:{phoneNumber}</h2>
      </div>
    </div>
  );
}

export default App;
