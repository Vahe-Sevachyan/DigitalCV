export const PersonalInfo = ({ onChange }) => {
  return (
    <div>
      <input type="text" placeholder="First Name" onChange={onChange} />
      <input type="text" placeholder="Last Name" onChange={onChange} />
    </div>
  );
};
