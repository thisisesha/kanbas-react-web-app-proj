import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as client from "./client"; 
import { useEffect } from "react";
import { setQuestions,setQuestion, resetQuestion} from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../../../store";

function QuizQuestion() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {quizId, courseId} = useParams();
  const questionList = useSelector(
    (state: KanbasState) => state.questionsReducer.questions
  );
  const question = useSelector(
    (state: KanbasState) => state.questionsReducer.question
  );
  const addQuestion = async () => {
    const id = new Date().getTime().toString();
    //await client.createQuestion(quizId, {title: "New Question", _id: id});
    dispatch(resetQuestion());
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/questions/${id}`)
  };

  const assignQues = (ques: any) => {
    console.log("Assigning Question ", ques);
    dispatch(setQuestion(ques));
    console.log("Question ", question);
  }


  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await client.getAllQuestions(quizId);
      dispatch(setQuestions(questions));
    };
    fetchQuestions();
  },[quizId]);


  return (
    <div>
      <div style={{ paddingRight: "40px", paddingLeft: "40px", paddingTop: "10px" }}>
        {questionList?.length === 0 || questionList === null ? (
          <div className="card text-muted" style={{ marginBottom: "20px" }}>
            <div className="text-center">
              <br />
              No questions available.
              <br /><br />
            </div>
          </div>
        ) : (
          <div>
            {questionList.map((question, index) => (
            <div key={question?._id} className="card" style={{ marginBottom: "20px" }}>
              <div className="card-header" style={{ fontWeight: "bold", display: "flex", justifyContent: "space-between" }}>
                <Link to={`${question._id}`} onClick={()=>{assignQues(question)}}>
                  <span>{question?.title}</span>
                  </Link>
                <span>
                  {question?.points} pts
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">
                  <div dangerouslySetInnerHTML={{ __html: question?.question }} />
                </p>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>

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


