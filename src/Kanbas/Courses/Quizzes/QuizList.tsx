import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlus,
  FaCaretDown,
  FaRocket,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuiz,
  updateQuiz,
  deleteQuiz,
  clearQuiz,
  setQuiz,
  setQuizzes,
} from "./reducer";
import { KanbasState } from "./../../store";

function QuizList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const navigateToAddQuiz = () => {
    dispatch(clearQuiz());
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/QuizEditor`);
  };

  const handleDelete = () => {
    const result = window.confirm("Are you sure you want to delete this Quiz?");
    if (result) {
      return true;
    } else {
      return false;
    }
  };

  const quiz = useSelector((state: KanbasState) => state.quizReducer.quiz);

  const quizList = useSelector(
    (state: KanbasState) => state.quizReducer.quizzes
  );

  const handleDeleteQuiz = async (quizId: string) => {
    const res = await client.deleteQuiz(quizId);
    dispatch(deleteQuiz(quizId));
  };

  useEffect(() => {
    client.findQuizForCourse(courseId).then((quizzes) => {
      dispatch(setQuizzes(quizzes));
    });
  }, [courseId]);

  return (
    <div className="col me-2">
      <div className="row wd-margin-top">
        <div className="float-end wd-margin-right">
          <div className="wd-button float-end">
            <a
              className="btn btn-secondary btn-sm ms-2"
              role="button"
              style={{ backgroundColor: "lightgray" }}
            >
              <FaEllipsisV />
            </a>
          </div>
          <div className="wd-button float-end">
            <Button variant="danger btn-sm" onClick={navigateToAddQuiz}>
              <FaPlus className="me-1" />
              Quiz
            </Button>{" "}
          </div>

          <div className="float-start w-25">
            <input
              className="form-control"
              id="input1"
              placeholder="Search for Quiz"
            />
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="wd-assignments-list">
        <ul
          className="list-group wd-margin-left"
          style={{ borderRadius: "0%" }}
        >
          <li className="list-group-item list-group-item-secondary">
            <div>
              <FaCaretDown className="me-2" />
              <b>Assignment Quizzes</b>
            </div>
          </li>
          <ul className="list-group" style={{ borderRadius: "0%" }}>
            {quizList.map((quiz) => (
              <li className="list-group-item">
                <div className="row">
                  <div
                    className="col-auto"
                    style={{ margin: "auto", display: "flex" }}
                  >
                    <FaRocket style={{ color: "green" }} />
                  </div>
                  <div className="col wd-fg-color-gray ps-0 ms-2">
                    <Link
                      onClick={(e) => dispatch(setQuiz(quiz))}
                      style={{ color: "green", textDecoration: "none" }}
                      className="fw-bold ps-0"
                      to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}
                    >
                      {/* Q1 - HTML */}
                      {quiz.title}
                    </Link>
                    <br />
                    {quiz.availability} |<b> Due</b> {quiz.dueDate} |{" "}
                    {quiz.points} pts | {quiz.numberOfQuestions} questions
                    {/* Sep 21 at 1pm | 29 pts | 11 questions */}
                  </div>
                  <div
                    className="col-auto"
                    style={{ margin: "auto", display: "flex" }}
                  >
                    <FaCheckCircle
                      className="ms-4"
                      style={{ color: "green" }}
                    />
                    <FaEllipsisV
                      className="ms-4"
                      style={{ verticalAlign: "middle" }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}

export default QuizList;