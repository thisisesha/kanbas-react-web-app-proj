import { FaCheckCircle, FaEllipsisV, FaPencilAlt, FaBan } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { setQuiz, updateQuiz } from "./reducer";
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
    dispatch(
      updateQuiz({
        ...quiz,
        published: !quiz.published,
      })
    );
    console.log("Publishing or Unpublishing the quiz");
    console.log(quiz.published);
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
          {quizList[0]?.published ? "Unpublish" : "Publish"}{" "}
          {quizList[0]?.published ? <FaBan /> : <FaCheckCircle />}
        </Link>

        <Link
          to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizPreview`}
          style={{ backgroundColor: "#d3d3d3", color: "black" }}
          className="btn btn-secondary btn-md ps-2 ms-2"
        >
          Preview
        </Link>

        <Link
          to={`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/QuizEditor`}
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
          style={{ paddingTop: "0.7px", paddingRight: "15px" }}
        >
          <b>Quiz Type</b>
        </div>
        <div className="col-sm-1 col-md-2">
          {quiz.quizType}
        
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Points</b>
        </div>
        <div className="col-sm-1 col-md-2">
          {quiz.points}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Assignment Group</b>
        </div>
        <div className="col-sm-1 col-md-2">
          {quiz.assignmentGroup}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Shuffle Answers</b>
        </div>
        <div className="col-sm-1 col-md-2">
  {quiz.shuffleAnswers ? 'Yes' : 'No'}
</div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Time Limit</b>
        </div>
        <div className="col-sm-1 col-md-2">
          {quiz.timeLimit}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Multiple Attempts</b>
        </div>
        <div className="col-sm-1 col-md-2">
        {quiz.multipleAttempts ? 'No' : 'Yes'}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>View Responses</b>
        </div>
        <div className="col-sm-1 col-md-2">
          Always
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Show Correct Answers</b>
        </div>
        <div className="col-sm-1 col-md-2">
          {quiz.correctAnswers ? 'Yes' : 'No'}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>One Question at a Time</b>
        </div>
        <div className="col-sm-1 col-md-2">
        {quiz.oneQuestion ? 'Yes' : 'No'}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Require Respondus LockDown Browser</b>
        </div>
        <div className="col-sm-1 col-md-2">
          No
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Required to View Quiz Results</b>
        </div>
        <div className="col-sm-1 col-md-2">
          No
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Webcam Required</b>
        </div>
        <div className="col-sm-1 col-md-2">
        {quiz.oneQuestion ? 'No' : 'Yes'}
        </div>
      </div>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
        <div
          className="col-6 col-md-4"
          style={{ paddingTop: "5px", paddingRight: "15px" }}
        >
          <b>Lock Questions After Answering</b>
        </div>
        <div className="col-sm-1 col-md-2">
        {quiz.lockQuestion ? 'No' : 'Yes'}
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
            <td>{quiz.dueDate} </td>
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
