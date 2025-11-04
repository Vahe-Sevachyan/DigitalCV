import "./PersonalInfo.css";
export const PersonalInfo = ({
  FirstNameChange,
  LastNameChange,
  EmailChange,
  PhoneNumberChange,
}) => {
  return (
    <div className="PersonalDetailsContainer">
      <input type="text" placeholder="First Name" onChange={FirstNameChange} />
      <input type="text" placeholder="Last Name" onChange={LastNameChange} />
      <input type="email" placeholder="Email" onChange={EmailChange} />
      <input type="number" placeholder="Phone" onChange={PhoneNumberChange} />
    </div>
  );
};
