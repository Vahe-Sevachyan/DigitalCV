import "./TechnicalSkills.css";
const TechnicalSkills = (props) => {
  return (
    <div>
      <h3>TechnicalSkills</h3>
      <div className="tech-skills">
        <input
          type="text"
          placeholder="Technical Skills"
          onChange={props.TechSkillsOne}
        />

        <input
          type="text"
          placeholder="Technical Skills"
          onChange={props.TechSkillsTwo}
        />

        <input
          type="text"
          placeholder="Technical Skills"
          onChange={props.TechSkillsThree}
        />
      </div>
    </div>
  );
};

export default TechnicalSkills;
