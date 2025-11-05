import { useState } from "react";

import "./App.css";
import { PersonalInfo } from "./Components/PersonalInfo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
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
  function HandleLocationChange(event) {
    setLocation(event.target.value);
  }

  return (
    <>
      <h1 className="appName">Digital Display</h1>
      <div className="mainDisplay">
        <section className="inputSection">
          <PersonalInfo
            FirstNameChange={handleFirstNameChange}
            LastNameChange={handleLastNameChange}
            EmailChange={handleEmailChange}
            PhoneNumberChange={HandlePhoneNumberChange}
            LocationChange={HandleLocationChange}
          />
        </section>
        <section className="displaySection">
          <div className="personalInfoInputs">
            <h2>First Name: {firstName}</h2>
            <h2>Last Name: {lastName}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone Number:{phoneNumber}</h2>
            <h2>Location: {location}</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
