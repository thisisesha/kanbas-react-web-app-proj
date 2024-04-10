import { Link } from "react-router-dom";
import TextEditor from "../../../../Common/TextBox";

function QuizDetail() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
            

      <div>
           
      <div id="editor">
      <input 
              className="form-control mb-2" 
              value="Unnamed Quiz"
              style={{width:"auto-content"}}
              //onChange={(e: { target: { value: any; }; }) =>  dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                />

        <TextEditor/>
      
       
        
  <br/>
  
  <br/>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
      <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
          Assignment Group
      </div>
      <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
      <select className="form-control form-select">
                          <option>ASSIGNMENTS</option>
                      </select>
        <br/>
        <strong>Options</strong> 
        <br/>
        <br/>
        
        <input type="checkbox"/>
          Shuffle Answers 
          <br/> 
          <br/>
          
          <div className="row g-0" style={{ paddingBottom: "15px" }}>
      <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
          <input type="checkbox"/>
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
    />
    <span style={{ marginLeft: "5px" }}>Minutes</span>
    </div>
    </div>
          </div>
  
          <br/>
          <input type="checkbox"/>
          Allow Multiple Attempts 
  
      </div>
      </div>
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
                          // value={quiz.dueDate}
                          
                          // onChange={(e) =>  dispatch(
                          //     setAssignment({ ...assignment, dueDate: e.target.value }))}
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
                                      //value={assignment.availableFromDate}
                                      // onChange={(e) =>  dispatch(
                                      //     setAssignment({ ...assignment, availableFromDate: e.target.value }))}
                                          />
                                  </div>
                                  <div className="col">
                                      <input className="form-control w-75" type="date" 
                                      // value={assignment.availableUntilDate}
                                      // onChange={(e) =>  dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                                      />
                                  </div>
  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
        <br/>
        <br/>      
        <hr style={{marginLeft: "10px"}} /> 
        <div style={{marginLeft: "10px"}}>
                <div className="d-flex justify-content-between" style={{ paddingTop: "15px" }}>
                  <span style={{marginLeft: "10px",  paddingTop: "5px"}}>
                    <input type="checkbox" />
                    Notify users that this content has changed
                  </span>
                  <span>
                    <Link to={`/Kanbas/Courses/Quizzes`}
                     // onClick={() => dispatch(cancelAssignmentUpdate(assignment))}
                      className="btn me-2" style={{height: "fit-content", backgroundColor: "#E0E0E0"}}
                      >
                      Cancel
                  </Link>
                  <Link to={`/Kanbas/Courses/Quizzes`}
                     // onClick={() => dispatch(cancelAssignmentUpdate(assignment))}
                      className="btn me-2" style={{height: "fit-content", backgroundColor: "#E0E0E0"}}
                      >
                      Save and Publish
                  </Link>
                    <button className="btn btn-danger" style={{marginRight: "5px"}}>
                      Save 
                  </button>
                  </span>
                </div>
  
                <hr style={{marginLeft: "10px"}} />
              </div>  
  
  
        
        
        </div>
      </div>
      </div>
  
    );
  }
  export default QuizDetail;