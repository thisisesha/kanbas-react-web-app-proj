import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as client from "./client"; 

function QuizQuestion() {
  const navigate = useNavigate();
  const {quizId, courseId} = useParams();

  const addQuestion = async () => {
    const id = new Date().getTime().toString();
    //await client.createQuestion(quizId, {title: "New Question", _id: id});
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions/${id}`)
  };

  return (
    <div>
      <h2>Hello from Questions</h2>
        <Button onClick={addQuestion}
          className="btn"
          style={{ backgroundColor: "lightgrey", color: "black" }}
        >
          New Question
        </Button>
    </div>
  );
}
export default QuizQuestion;
