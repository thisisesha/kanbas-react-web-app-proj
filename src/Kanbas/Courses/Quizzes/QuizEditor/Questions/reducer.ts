import { createSlice } from "@reduxjs/toolkit";
import Quiz from "../..";

interface Option {
  id: string;
  option: string;
}

interface Question {
  _id: string;
  title: string;
  points: number;
  question: string;
  quizId: string;
  type:'MultipleChoice'|'TrueFalse'|'FillBlank';
  options: Option[];
} 

const initialState = {
  questions: [] as Question[],
  question: {
    title: "New Question",
    points: 0,
    question: "",
    type: "MultipleChoice",
    quizId: "",
    options: [] as Option[],
  },
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions = [action.payload, ...state.questions];
    },

    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question._id !== action.payload
      );
    },
    updateQuestion: (state, action) => {
      console.log("Updating Question", action.payload);
      state.questions = state.questions.map((question) => {
        if (question._id === action.payload._id) {
          return action.payload;
        } else {
          return question;
        }
      });
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },

    setQuestion: (state, action) => {
      state.question = action.payload;
    },

    resetQuestion: (state) => {
      state.question = initialState.question;
    },

    addOption: (state,action) => {
      const temp = {id: new Date().getTime().toString(), option: action.payload};
      state.question.options = [...state.question.options, temp];
    },

    

    updateOption: (state, action) => {
      console.log("Updating Option", action.payload);
      state.question.options = state.question.options.map((option) => {
        console.log("Option", option);
        if (option.id === action.payload.id) {
          return action.payload;
        } else {
          return option;
        }
      });
    },

    deleteOption: (state, action) => {
      state.question.options = state.question.options.filter(
        (option) => option.id !== action.payload
      );
    },
  },
});

export const {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  setQuestion,
  setQuestions,
  addOption,
  updateOption,
  deleteOption,
  resetQuestion,
} = questionsSlice.actions;
export default questionsSlice.reducer;