import { useState } from "react";

import "./App.css";
import { PersonalInfo } from "./Components/PersonalInfo";
import Summary from "./Components/Summary";
import TechnicalSkills from "./Components/TechnicalSkills";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [techSkillsOne, SetTechSkillsOne] = useState("");
  const [techSkillsTwo, SetTechSkillsTwo] = useState("");
  const [techSkillsThree, SetTechSkillsThree] = useState("");
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
  function handleTechSkillsOne(event) {
    SetTechSkillsOne(event.target.value);
  }
  function handleTechSkillsTwo(event) {
    SetTechSkillsTwo(event.target.value);
  }
  function handleTechSkillsThree(event) {
    SetTechSkillsThree(event.target.value);
  }
  return (
    <>
      <h1 className="appName">Digital CV</h1>
      <div className="mainDisplay">
        <section className="inputSection">
          <PersonalInfo
            FirstNameChange={handleFirstNameChange}
            LastNameChange={handleLastNameChange}
            EmailChange={handleEmailChange}
            PhoneNumberChange={HandlePhoneNumberChange}
            LocationChange={HandleLocationChange}
          />
          <TechnicalSkills
            TechSkillsOne={handleTechSkillsOne}
            TechSkillsTwo={handleTechSkillsTwo}
            TechSkillsThree={handleTechSkillsThree}
          />
        </section>
        <section className="displaySection">
          <div className="personalInfoInputs">
            <div className="name-container">
              <h2> {firstName} </h2>
              <h2> {lastName}</h2>
            </div>
            <h2 className="email">{email}</h2>
            <div className="phone-location">
              <h2>{phoneNumber}</h2>
              <h2>{location}</h2>
            </div>
          </div>
          <div className="summarySection">
            <Summary />
          </div>
          <div className="tech-skills-section">
            <span>{techSkillsOne}</span>
            <span>{techSkillsTwo}</span>
            <span> {techSkillsThree}</span>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
