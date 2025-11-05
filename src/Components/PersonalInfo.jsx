import "./PersonalInfo.css";
export const PersonalInfo = ({
  FirstNameChange,
  LastNameChange,
  EmailChange,
  PhoneNumberChange,
}) => {
  return (
    <div className="PersonalDetailsContainer">
      <label htmlFor="firstName">First Name: </label>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={FirstNameChange}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={LastNameChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={EmailChange}
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        onChange={PhoneNumberChange}
      />
    </div>
  );
};
