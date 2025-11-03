export const PersonalInfo = ({ FirstNameChange, LastNameChange }) => {
  return (
    <div>
      <input type="text" placeholder="First Name" onChange={FirstNameChange} />
      <input type="text" placeholder="Last Name" onChange={LastNameChange} />
    </div>
  );
};
