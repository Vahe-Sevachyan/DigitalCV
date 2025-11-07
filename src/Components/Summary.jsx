import "./Summary.css";
const Summary = () => {
  return (
    <div className="summary-container">
      <h3 className="summary-header">Summary</h3>
      <textarea
        name="summary"
        placeholder="Summarize your objective"
      ></textarea>
    </div>
  );
};

export default Summary;
