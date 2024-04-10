import { Routes, Route, Navigate } from "react-router";
import Nav from "./nav";
import QuizDetail from "../QuizDetail";
import QuizQuestion from "./Questions";

function QuizEditor() {
  return (
    <div>
      <h2>
        Hello
      </h2>
      <Nav />
      <Routes>
      <Route path="/" element={<Navigate to="details" />} />
        <Route path="details" element={<QuizDetail />} />
        <Route path="questions" element={<QuizQuestion />} />
      </Routes>

    </div>
  );
}
export default QuizEditor;
