import React, { useRef, useState } from 'react';
import './index.css';
import { FaBold} from "react-icons/fa6";
import { GoItalic } from "react-icons/go";
import { FiUnderline } from "react-icons/fi";
import { MdFormatColorText } from "react-icons/md";
import { BiHighlight, BiParagraph } from "react-icons/bi";
import { RiSuperscript2 } from "react-icons/ri";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { MdOutlineRotateRight } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { PiArrowsOutSimple } from "react-icons/pi";
import { PiDotsSixVertical } from "react-icons/pi";
import { Link } from 'react-router-dom';

const TextEditor: React.FC = () => {
  const [fontSize, setFontSize] = useState('16px');
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textColor, setTextColor] = useState('#000000');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [highlightColor, setHighlightColor] = useState('#FFFF00'); 
  const highlightColorPickerRef = useRef<HTMLInputElement>(null);
  const [isSuperscript, setIsSuperscript] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  

  

  const toggleBold = () => {
    setIsBold(!isBold);
  };
  const toggleItalics = () => {
    setIsItalic(!isItalic);
  };
  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };
  
  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleFontSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFontSize = event.target.value;
    setFontSize(selectedFontSize);
    document.execCommand('fontSize', false, selectedFontSize);
  };
  
  const handleTextColorChange = (color: string) => {
    setTextColor(color);
    document.execCommand('foreColor', false, color);
  };

  const handleHighlightColorChange = (color: string) => {
    document.execCommand('hiliteColor', false, color);
  };
  const handleHighlightButtonClick = () => {
    if (highlightColorPickerRef.current) {
      highlightColorPickerRef.current.click();
    }
  };

  const toggleSuperscript = () => {
    document.execCommand('superscript');
    setIsSuperscript(!isSuperscript);
  };

  const updateWordCount = (textArea: HTMLTextAreaElement) => {
    const words = textArea.value.trim().split(/\s+/);
    setWordCount(words.length);
  };



  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
            

    <div>
         <span>
         <a href="#" style={{ textDecoration: "none" , color:"black"}}>Edit</a>
      </span>
      <span>
        <a href="#" style={{ textDecoration: "none" ,color:"black" }}>View</a>
      </span>
      <span>
        <a href="#" style={{ textDecoration: "none" ,color:"black" }}>Insert</a>
      </span>
      <span>
        <a href="#" style={{ textDecoration: "none" ,color:"black" }}>Format</a>
      </span>
      <span>
        <a href="#" style={{ textDecoration: "none" ,color:"black"}}>Tools</a>
      </span>
      <span>
        <a href="#" style={{ textDecoration: "none",color:"black"}}>Table</a>
      </span>
      <span className='float-end'>
      <MdOutlineRotateRight style={{color:"green", fontSize: "30px"}}/> 100%
      </span>
      
      
    
    <div id="editor">
    
     <div id="formattingOptions">
      <select id="fontSizeSelect" onChange={handleFontSizeChange} value={fontSize}>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
        </select>

        <select id="paraType" style={{border:"none"}}>
          <option value="paragraph">Paragraph</option>
         
        </select>
        <div className="vertical-line"></div>
      <span>
      <FaBold onClick={toggleBold} className="icon"/>
      </span>
      <span>
      <GoItalic onClick={toggleItalics} className="icon"/>
      </span>
      <span>
      <FiUnderline onClick={toggleUnderline} className="icon"/>
      </span>
      <span onClick={toggleColorPicker} className="colorPickerIcon"><MdFormatColorText /></span>
        {showColorPicker && (
          <input
            type="color"
            className="colorPicker"
            onChange={(e) => handleTextColorChange(e.target.value)}
            value={textColor}
          />
        )}

       <span onClick={toggleColorPicker} className="colorPickerIcon"><BiHighlight /></span>
        {showColorPicker && (
          <input
            type="color"
            className="colorPicker"
            onChange={(e) => handleHighlightColorChange(e.target.value)}
          />
        )}
        <span>
        <RiSuperscript2 onClick={toggleSuperscript} className="icon"/>
        </span>
        <div className="vertical-line"></div>
        <span>
        <HiOutlineEllipsisVertical />
        </span>
        
      </div>
      <br/>
      <textarea id="textInput" placeholder="Enter your text here..." style={{color: textColor , fontSize, fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal', textDecoration: isUnderline ? 'underline' : 'none', verticalAlign: isSuperscript ? 'super' : 'baseline', }}/>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <p style={{ margin: 0 }}>p</p>
  <div style={{ marginLeft: 'auto', display: 'flex' }}>
    <span>
      <FaRegKeyboard style={{ color: "red" }} />
    </span>
    <div className="vertical-line"></div>
    
    <span>
      <p style={{ color: "red", margin: 0 }}>0 words</p>
    </span>
    <div className="vertical-line"></div>
    <span>
    <HiMiniCodeBracket style={{ color: "red" }} />
    </span>
    <span>
    <PiArrowsOutSimple style={{ color: "red" }} />
    </span>
    
    <div style={{ border: '1px solid red', padding: '0.5px', borderRadius: '5px', display: 'inline-block' }}>
    <span>
        <PiDotsSixVertical/>
    </span>
    </div>
  </div>
</div>
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
};

export default TextEditor;
