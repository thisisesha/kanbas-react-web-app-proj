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
  course: String;
}
const initialState = {
  quizzes: [] as Quiz[],
  quiz: {
    title: "Unnamed Quiz",
    availability: "",
    numberOfQuestions: "",
    _id: "-1",
    points: "100",
    dueDate: new Date().toISOString().slice(0, 16),
    availableFromDate: new Date().toISOString().slice(0, 16),
    availableUntilDate: new Date().toISOString().slice(0, 16),
    course: "-1",
  },
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes = [...state.quizzes, action.payload];
      state.quiz = initialState.quiz;
    },

    updateQuiz: (state, action) => {
      state.quizzes = state.quizzes.map((quiz) => {
        if (quiz._id === action.payload._id) {
          return action.payload;
        } else {
          return quiz;
        }
      });
    },

    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz._id !== action.payload
      );
    },

    clearQuiz: (state) => {
      state.quiz = initialState.quiz;
    },

    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
    },
  },
});
export const {
  addQuiz,
  updateQuiz,
  deleteQuiz,
  clearQuiz,
  setQuiz,
  setQuizzes,
} = quizzesSlice.actions;
export default quizzesSlice.reducer;
