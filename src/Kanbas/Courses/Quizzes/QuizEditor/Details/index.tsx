import { useNavigate, useParams, Link } from "react-router-dom";
import TextEditor from "../../../../Common/TextBox";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../../store";
import * as client from "../../client";
import {
    
    setQuiz
  } from "../../reducer";
import Quiz from "../..";
import { useEffect } from "react";

function QuizDetail() {
    const { quizId } = useParams();
    const dispatch = useDispatch();
    const quizList = useSelector((state: KanbasState) =>
        state.quizReducer.quizzes);
    const quiz = useSelector(
        (state: KanbasState) => state.quizReducer.quiz
      );

      useEffect(() => {
        const quizDataMain = quizList.find((q) => q._id === quizId);
        const quizData = { ...quizDataMain };
            if (
                quizData.availableFromDate &&
                quizData.availableFromDate !== ""
              ) {
        
                quizData.availableFromDate = new Date(
                  quizData.availableFromDate
                )
                  .toISOString()
                  .split("T")[0];
              }
              if (
                quizData.availableUntilDate &&
                quizData.availableUntilDate !== ""
              ) {
                quizData.availableUntilDate = new Date(
                  quizData.availableUntilDate
                )
                  .toISOString()
                  .split("T")[0];
              }
              if (quizData.dueDate && quizData.dueDate !== "") {
                quizData.dueDate = new Date(quizData.dueDate)
                  .toISOString()
                  .split("T")[0];
              } 
          dispatch(setQuiz(quizData));
        }, [dispatch, quizId]);

      

    


  //   const assignment = assignments.find(
  //     (assignment) => assignment._id === assignmentId
  //   );
    






    return (
        
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
            

      <div>
           
      <div id="editor">
        <br/>
      <input 
              value={quiz?.title}
              className="form-control mb-2" 
              style={{width:"auto-content"}}
              onChange={(e) => {
                dispatch(setQuiz({ ...quiz, title: e.target.value }));
              }}
                />
                <br/>
        <textarea
        value={quiz.description}
        className="form-control mb-2"
        onChange={(e) => {
          dispatch(
            setQuiz({ ...quiz, description: e.target.value })
          );
        }}
      />
      <br/>

        <TextEditor/>

        
              <br/>

        
       
      
       
        
  <br/>
  
  <br/>
  <div className="row g-0 text-end">
                  <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                      Quiz Type
                  </div>
                  <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                  <select value={quiz.quizType} className="form-control form-select" onChange={(e) => {
          dispatch(
            setQuiz({ ...quiz, quizType: e.target.value })
          );
        }}>
                          <option>Graded Quiz</option>
                          <option>Practice Quiz</option>
                          <option>Graded Survey</option>
                          <option>Practice Survey</option>
                      </select>
                  </div>
              </div>
              <br/>
              <div className="row g-0 text-end">
                  <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                      Points
                  </div>
                  <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                  <input
            className="form-control"
            type="number"
            placeholder="Points"
            aria-label="default input example"
            value={quiz?.points}
            onChange={(e) =>
            dispatch(setQuiz({ ...quiz, points: e.target.value }))
            }
          />
                  </div>
              </div>
              <br/>
      

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
      <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
          Assignment Group
      </div>
      <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
      <select  value={quiz.assignmentGroup} className="form-control form-select" onChange={(e) => {
          dispatch(
            setQuiz({ ...quiz, assignmentGroup: e.target.value })
          );
        }}>
      <option>Quizzes</option>
                          <option>Exams</option>
                          <option>Assignments</option>
                          <option> Project</option>
                      </select>
        <br/>
        <strong>Options</strong> 
        <br/>
        <br/>
        
        <input type="checkbox"checked={quiz?.shuffleAnswers}
  onChange={(e) => {
    dispatch(
      setQuiz({
        ...quiz,
        
          shuffleAnswers: e.target.checked
        
      })
    );
  }}/>
          Shuffle Answers 
          <br/> 
          <br/>
          
          <div className="row g-0" style={{ paddingBottom: "15px" }}>
      <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
          <input type="checkbox" />
          Time Limit
          </div>
          <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
  
          <div style={{ display: "flex" }}>
            
           
    <input
      className="form-control"
      type="number"
      placeholder="0"
      aria-label="Minutes"
      style={{ width: "70px" }} 
      defaultValue={20}
      value={quiz.timeLimit}
      onChange={(e) => {
        dispatch(
          setQuiz({
            ...quiz,
              timeLimit: e.target.checked
            
          })
        );
      }}
      
    />
    <span style={{ marginLeft: "5px" }}>Minutes</span>
    </div>
    </div>
          </div>
  
          <br/>
          <input type="checkbox" checked={quiz.multipleAttempts}
  onChange={(e) => {
    dispatch(
      setQuiz({
        ...quiz,
          multipleAttempts: e.target.checked
        
      })
    );
  }}/>
          Allow Multiple Attempts 

          <br/>
          <input type="checkbox" checked={quiz.correctAnswers}
  onChange={(e) => {
    dispatch(
      setQuiz({
        ...quiz,
          correctAnswers: e.target.checked
        
      })
    );
  }}/>
          Show Correct Answers

          <br/>
          <input type="checkbox" checked={quiz.oneQuestion}
  onChange={(e) => {
    dispatch(
      setQuiz({
        ...quiz,
          oneQuestion: e.target.checked
        
      })
    );
  }}/>
          One Question at a Time

          <br/>
          <input type="checkbox" checked={quiz.webcam}
  onChange={(e) => {
    dispatch(
      setQuiz({
        ...quiz,
       
          webcam: e.target.checked
        
      })
    );
  }}/>
          Webcam required

          <br/>
          <input type="checkbox" checked={quiz.lockQuestion}
  onChange={(e) => {
    dispatch(
      setQuiz({
        ...quiz,
          lockQuestion: e.target.checked
        
      })
    );
  }}/>
          Lock Question after Answering
  
  
      </div>
      </div>


      <div className="row g-0 text-end">
                  <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                      Access Code
                  </div>
                  <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                  <input 
              className="form-control mb-2" 
              style={{width:"auto-content"}}
              value={quiz?.accessCode}
              onChange={(e: { target: { value: any; }; }) =>  dispatch(setQuiz({ ...quiz, accessCode: e.target.value }))}
                />
                <br/>
                  </div>
              </div>
              <br/>





      <div className="row g-0 text-end">
                  <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                      Assign
                  </div>
                  <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                      <div
                          className="wd-group"
                          style={{ border: "0.5px solid black", borderRadius: "1%", padding: "10px" }}
                      >
                          <b>Assign to</b>
                          <input
                              className="form-control"
                              type="text"
                              placeholder="Choose"
                              value="Everyone"
                              aria-label="default input example"
                          />
                          <br />
                          <b>Due</b>
                          <input className="form-control" type="date" 
                          value={quiz.dueDate}
                          
                          onChange={(e) =>  dispatch(
                          setQuiz({ ...quiz, dueDate: e.target.value }))}
                          />
                          <br />
                          <div
                              className="wd-flex-row-container"
                              style={{ width: "-webkit-fill-available", justifyContent: "space-around" }}
                          >
                              <div className="row" >
                                  <div className="col">
                                      <b>Available from </b>
                                  </div>
                                  <div className="col"><b>Until </b>
                                  </div>
                              </div>
  
                              <div className="row">
                                  <div className="col">
                                      <input className="form-control w-75" type="date" 
                                      value={quiz.availableFromDate}
                                      onChange={(e) =>  dispatch(
                                       setQuiz({ ...quiz, availableFromDate: e.target.value }))}
                                          />
                                  </div>
                                  <div className="col">
                                      <input className="form-control w-75" type="date" 
                                      value={quiz.availableUntilDate}
                                      onChange={(e) =>  dispatch(setQuiz({ ...quiz, availableUntilDate: e.target.value }))}
                                      />
                                  </div>
  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        
  
  
        
        
        </div>
      </div>
      </div>
  
    );
  }
  export default QuizDetail;