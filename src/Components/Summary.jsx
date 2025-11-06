import "./Summary.css";
const Summary = () => {
  return (
    <div className="summary-container">
      <h3 className="summary-header">Summary</h3>
      <textarea name="summary" id="">
        Summarize your objective
      </textarea>
    </div>
  );
};

export default Summary;
