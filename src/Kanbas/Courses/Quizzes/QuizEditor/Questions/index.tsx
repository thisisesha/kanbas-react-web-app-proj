import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

function QuizQuestion() {
  const navigate = useNavigate();
  const {quizId, courseId} = useParams();
  console.log("quizId=",quizId);
  console.log("quizId=",courseId);

  const addQuestion = () => {
    const id = new Date().getTime().toString();
    console.log(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions/${id}`);
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
