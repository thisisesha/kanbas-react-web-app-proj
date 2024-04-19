import TextBox from "../../../../../Common/TextBox";

function SelectionBar() {
  const val = 20;
  return (
    <div className="col">
      <input className="form" type="text" placeholder="Question Name" />
      <select className="form">
        <option value="MultipleChoice">Multiple Choice</option>
        <option value="TrueFalse">True/False</option>
        <option value="FillBlank">Fill in the Blank</option>
      </select>
      <span
        className="float-end"
        style={{ fontSize: "20px", fontWeight: "bold" }}
      >
        pts:
        <input
          value={val}
          className="form ms-1"
          style={{ width: "50px" }}
          type="number"
        />
      </span>
    </div>
  );
}

function QuestionEditor() {
  return (
    <div>
      <SelectionBar />
      <hr />
      <p>
        Enter your question text, then define all possible correct answers for
        the blank.
        <br />
        Students will see the question followed by a small text box to type
        their answer.
      </p>
      <h2>Question:</h2>
      <TextBox />
    </div>
  );
}

export default QuestionEditor;
