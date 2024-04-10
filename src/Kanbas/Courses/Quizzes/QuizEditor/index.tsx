import { Routes, Route, Navigate, useParams } from "react-router";
import Nav from "./nav";
import QuizQuestion from "./Questions";
import QuizDetail from "./Details";
import QuestionEditor from "./Questions/QuestionEditor";

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
    </div>
  );
}
export default QuizEditor;
