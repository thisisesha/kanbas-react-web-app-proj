import { useEffect, useState } from "react";
import TextBox from "../../../../../Common/TextBox";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import FillInTheBlank from "./FillInTheBlank";
import TrueFalse from "./TrueFalse";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function QuestionEditor() {
  const val = 20;

  const [questionType, setQuestionType] = useState("MultipleChoice");
  const [currentQuestionType, setCurrentQuestionType] = useState(<></>);

  useEffect(() => {
    checkType();
  }, [questionType]);

  const checkType = () => {
    console.log("Check  ", questionType);
    let temp = <></>;
    if (questionType.includes("MultipleChoice")) {
      temp = <MultipleChoiceQuestion />;
    } else if (questionType.includes("TrueFalse")) {
      temp = <TrueFalse />;
    } else {
      console.log("Fill in the Blank Question");
      temp = <FillInTheBlank />;
    }
    setCurrentQuestionType(temp);
  };

  return (
    <div>
      <div className="col">
        <input className="form" type="text" placeholder="Question Name" />
        <select
          className="form"
          value={questionType}
          onChange={(e) => {
            setQuestionType(e.target.value);
          }}
        >
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
      {currentQuestionType}
      <div  className="float-end me-2" >
        <FaPlus className="me-2" style={{ color: "red" }} />
        <a
          style={{ color: "red", textDecoration: "none" }}
        >
          Add Another Answer
        </a>
      </div>

      <br />
      <Button className="btn btn-secondary">Cancel</Button>
      <Button className="btn btn-danger ms-2">Update Question</Button>
    </div>
  );
}

export default QuestionEditor;
