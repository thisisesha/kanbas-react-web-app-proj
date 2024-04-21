import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as client from "./client";
import { useEffect } from "react";
import { setQuestions, setQuestion, resetQuestion } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../../store";

function QuizQuestion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizId, courseId } = useParams();
  const questionList = useSelector(
    (state: KanbasState) => state.questionsReducer.questions
  );
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );
  const addQuestion = async () => {
    const newReq = {
      title: "New Question",
      quizId: quizId,
      points: 0,
      type: "MultipleChoice",
      option:[]
    };
    const res = await client.createQuestion(quizId, newReq);
    dispatch(setQuestion(res));
    dispatch(setQuestions([...questionList, res]));
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions/${res._id}`);
  };

  const assignQues = (ques: any) => {
    console.log("Assigning Question ", ques);
    dispatch(setQuestion(ques));
    console.log("Question ", question);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await client.getAllQuestions(quizId);
      dispatch(setQuestions(questions));
    };
    fetchQuestions();
  }, [quizId]);

  return (
    <div>
      <h2>Hello from Questions</h2>
      {questionList.map((question) => (
        <div key={question._id}>
          <Link
            to={`${question._id}`}
            onClick={() => {
              assignQues(question);
            }}
          >
            {question.title}
          </Link>
        </div>
      ))}

      <Button
        onClick={addQuestion}
        className="btn"
        style={{ backgroundColor: "lightgrey", color: "black" }}
      >
        New Question
      </Button>
    </div>
  );
}
export default QuizQuestion;
