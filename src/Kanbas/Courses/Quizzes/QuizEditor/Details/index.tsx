import { Link } from "react-router-dom";
import TextEditor from "../../../../Common/TextBox";

function QuizDetail() {
    return (
        
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
            

      <div>
           
      <div id="editor">
        <br/>
      <input 
              className="form-control mb-2" 
              value="Unnamed Quiz"
              style={{width:"auto-content"}}
              //onChange={(e: { target: { value: any; }; }) =>  dispatch(setAssignment({ ...assignment, title: e.target.value }))}
                />
                <br/>
        <textarea
        value="Unnamed Description"
        className="form-control mb-2"
        onChange={(e) => {
          //dispatch(
            //setAssignment({ ...assignment, description: e.target.value })
          //);
        }}
      />
      <br/>

        <TextEditor/>

        
       
      
       
        
  <br/>
  
  <br/>
  <div className="row g-0 text-end">
                  <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                      Quiz Type
                  </div>
                  <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                  <select className="form-control form-select">
                          <option selected>Graded Quiz</option>
                          <option>Practice Quiz</option>
                          <option>Graded Survey</option>
                          <option>Practice Survey</option>
                      </select>
                  </div>
              </div>
              <br/>

      <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
      <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
          Assignment Group
      </div>
      <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
      <select className="form-control form-select">
      <option selected>Quizzes</option>
                          <option>Exams</option>
                          <option>Assignments</option>
                          <option> Project</option>
                      </select>
        <br/>
        <strong>Options</strong> 
        <br/>
        <br/>
        
        <input type="checkbox"checked/>
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
      defaultValue={20}
    />
    <span style={{ marginLeft: "5px" }}>Minutes</span>
    </div>
    </div>
          </div>
  
          <br/>
          <input type="checkbox" checked/>
          Allow Multiple Attempts 

          <br/>
          <input type="checkbox" checked/>
          Show Correct Answers

          <br/>
          <input type="checkbox" checked/>
          One Question at a Time

          <br/>
          <input type="checkbox"/>
          Webcam required

          <br/>
          <input type="checkbox"/>
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
              //onChange={(e: { target: { value: any; }; }) =>  dispatch(setAssignment({ ...assignment, title: e.target.value }))}
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
        
  
  
        
        
        </div>
      </div>
      </div>
  
    );
  }
  export default QuizDetail;