import { createSlice } from "@reduxjs/toolkit";

interface Option {
  id: string;
  option: string;
}

interface Question {
  id: string;
  title: string;
  points: number;
  question: string;
  options: string[];
}

const initialState = {
  questions: [] as Question[],
  question: {
    title: "New Question",
    points: 0,
    question: "",
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
        (question) => question.id !== action.payload
      );
    },
    updateQuestion: (state, action) => {
      state.questions = state.questions.map((question) => {
        if (question.id === action.payload.id) {
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

    addOption: (state, action) => {
      state.question.options = [...state.question.options, action.payload];
    },

    updateOption: (state, action) => {
      state.question.options = state.question.options.map((option) => {
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
} = questionsSlice.actions;
export default questionsSlice.reducer;