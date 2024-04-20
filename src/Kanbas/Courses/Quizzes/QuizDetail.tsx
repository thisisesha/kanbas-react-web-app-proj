import { FaCheckCircle, FaEllipsisV, FaPencilAlt, FaBan } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { setQuiz } from "./reducer";
import { useState } from "react";

function QuizDetail() {
  const { courseId } = useParams();
  const { quizId } = useParams();
  const [published, setPublished] = useState(false);

  const dispatch = useDispatch();

  const quiz = useSelector((state: KanbasState) => state.quizReducer.quiz);

  const quizList = useSelector(
    (state: KanbasState) => state.quizReducer.quizzes
  );

  const handleTogglePublish = () => {
    // Toggle the published status
    setPublished((prevPublished) => !prevPublished);
    console.log("Publishing or Unpublishing the quiz");
  };

  return (
    <div className="flex-fill">
      <div className="d-flex justify-content-end">
        <Link
          to={"#"}
          style={{ backgroundColor: "green", color: "white" }}
          className="btn btn-secondary btn-md ps-2 ms-2"
          onClick={handleTogglePublish}
        >
          {quiz.published ? "Unpublish" : "Publish"}{" "}
          {quiz.published ? <FaBan /> : <FaCheckCircle />}
        </Link>

        <Link
          to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizPreview`}
          style={{ backgroundColor: "#d3d3d3", color: "black" }}
          className="btn btn-secondary btn-md ps-2 ms-2"
        >
          Preview
        </Link>

        <Link
          to={`/Kanbas/Courses/${courseId}/Quizzes/QuizEditor`}
          style={{ backgroundColor: "#d3d3d3", color: "black" }}
          className="btn btn-secondary btn-md ps-2 ms-2"
          role="button"
        >
          <FaPencilAlt />
          Edit
        </Link>

        <Link
          to={"#"}
          style={{ backgroundColor: "#d3d3d3", color: "black" }}
          className="btn btn-secondary btn-md ms-2"
          role="button"
        >
          <FaEllipsisV />
        </Link>
      </div>

      <hr></hr>
      <div className="d-flex justofy-content-start">
        <h2>{quiz.title}</h2>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Quiz Type</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select className="form-control mb-2"
           onChange={(e) => setQuiz({ ...quiz, quizType: e.target.value })}>
            <option value="GRADED_QUIZ">Graded Quiz</option>
            <option value="PRACTICE_QUIZ">Practice Quiz</option>
            <option value="GRADED_SURVEY">Graded Survey</option>
            <option value="UNGRADED_SURVEY">Ungraded Survey</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Points</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <input
            className="form-control"
            type="number"
            placeholder="29"
            aria-label="default input example"
            // value=
            onChange={(e) =>
              dispatch(setQuiz({ ...quiz, points: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Assignment Group</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="QUIZZES">Quizzes</option>
            <option value="EXAMS">Exams</option>
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="PROJECT">Project</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Shuffle Answers</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Time Limit</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <input
            className="form-control"
            type="number"
            placeholder="20 Minutes"
            aria-label="default input example"
            value="20 Minutes"
            // onChange={(e) =>
            //   dispatch(setAssignment({ ...assignment, points: e.target.value }))
            // }
          />
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Multiple Attempts</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>View Responses</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="ALWAYS">Always</option>
            <option value="NEVER">Never</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Show Correct Answers</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="IMMEDIATELY">Immediately</option>
            <option value="LATER">Later</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>One Question at a Time</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="YES">Yes</option>
            <option value="NO">No</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Require Respondus LockDown Browser</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Required to View Quiz Results</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Webcam Required</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Lock Questions After Answering</b>
        </div>
        <div className="col-sm-6 col-md-8 w-50">
          <select
            className="form-control mb-2"
            // onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="NO">No</option>
            <option value="YES">Yes</option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Due</th>
            <th scope="col">For</th>
            <th scope="col">Available from</th>
            <th scope="col">Until</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{quiz.dueDate}</td>
            <td>Everyone</td>
            <td>{quiz.availableFromDate}</td>
            <td>{quiz.availableUntilDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default QuizDetail;
