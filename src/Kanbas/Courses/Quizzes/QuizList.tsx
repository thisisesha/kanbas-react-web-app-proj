import { Button } from "react-bootstrap";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaCaretDown, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function QuizList() {
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
              <Button variant="danger btn-sm">
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
              {/* {assignmentList.map((assignment) => ( */}
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
                        // onClick={(e) => dispatch(setAssignment(assignment))}
                        style={{ color: "green", textDecoration: "none" }}
                        className="fw-bold ps-0"
                        to={`/Kanbas/Courses/`}
                      >
                        Q1 - HTML
                      </Link>
                      <br />
                      Closed | 
                      
                      <b> Due</b> Sep 21 at 1pm | 29 pts | 11 questions
                    </div>
                    <div
                      className="col-auto"
                      style={{ margin: "auto", display: "flex" }}
                    >
                      
                      <FaCheckCircle className="ms-4" style={{ color: "green" }} />
                      <FaEllipsisV className="ms-4" style={{ verticalAlign: "middle" }} />
                    </div>
                  </div>
                </li>
              {/* ))} */}
            </ul>
          </ul>
        </div>
        </div>
      );
}

export default QuizList;