import { Routes, Route, Navigate, useParams } from "react-router";
import Nav from "./nav";
import QuizQuestion from "./Questions";
import QuizDetail from "./Details";
import QuestionEditor from "./Questions/QuestionEditor";
import { Link } from "react-router-dom";

function QuizEditor() {
  const { quizId } = useParams();

  console.log("quizfdfdId=", quizId);
  return (
    <div>
      <h2>Hello</h2>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="details" />} />
        <Route path="details" element={<QuizDetail />} />
        <Route path="questions" element={<QuizQuestion />} />
      </Routes>
      <br /><br /><hr style={{ marginLeft: "10px" }} />
    <div style={{ marginLeft: "10px" }}>
        <div className="d-flex justify-content-between" style={{ paddingTop: "15px" }}>
          <span style={{ marginLeft: "10px", paddingTop: "5px" }}>
            <input type="checkbox" />
            Notify users that this content has changed
          </span>
          <span>
            <Link to={`/Kanbas/Courses/Quizzes`}
              // onClick={() => dispatch(cancelAssignmentUpdate(assignment))}
              className="btn me-2" style={{ height: "fit-content", backgroundColor: "#E0E0E0" }}
            >
              Cancel
            </Link>
            <Link to={`/Kanbas/Courses/Quizzes`}
              // onClick={() => dispatch(cancelAssignmentUpdate(assignment))}
              className="btn me-2" style={{ height: "fit-content", backgroundColor: "#E0E0E0" }}
            >
              Save and Publish
            </Link>
            <button className="btn btn-danger" style={{ marginRight: "5px" }}>
              Save
            </button>
          </span>
        </div>

        <hr style={{ marginLeft: "10px" }} />
      </div>
    </div>
  );
}
export default QuizEditor;
