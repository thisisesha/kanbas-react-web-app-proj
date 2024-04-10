import { createSlice } from "@reduxjs/toolkit";
interface Quiz {
    title: string;
    availability: string;
    points: string;
    dueDate: string;
    _id: string;
    numberOfQuestions: string;
    availableFromDate: string;
    availableUntilDate: string;
    course:String;
  }
  const initialState = {
    quizzes: [] as Quiz[],
    quiz: {
      title: "Unnamed Quiz",
      availability: "",
      numberOfQuestions: "",
      _id:"-1",
      points: "100",
      dueDate: new Date().toISOString().slice(0, 16),
      availableFromDate: new Date().toISOString().slice(0, 16),
      availableUntilDate: new Date().toISOString().slice(0, 16),
      course:"-1",
    },
  }
  const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuiz: (state, action) => {
            state.quiz = action.payload;
          },
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
          },
    },
});
export const {
  setQuiz, setQuizzes
} = quizzesSlice.actions;
export default quizzesSlice.reducer;