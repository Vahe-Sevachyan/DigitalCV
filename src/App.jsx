import { useState } from "react";

import "./App.css";
import { PersonalInfo } from "./Components/PersonalInfo";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <>
      <h2>First Name: {firstName}</h2>
      <PersonalInfo />
    </>
  );
}

export default App;
