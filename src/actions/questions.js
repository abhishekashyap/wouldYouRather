import { saveQuestion, saveQuestionAnswer } from "../utils/API";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addUserQuestion, addUserQuestionAnswer } from "./users";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

function addQuestionAnswer(authedUser, questionId, selectedOption) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    questionId,
    selectedOption,
  };
}

export function handleAddQuestionAnswer(questionId, selectedOption, callback) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    const { authedUser } = getState();

    saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer: selectedOption,
    })
      .then(() => {
        dispatch(addQuestionAnswer(authedUser, questionId, selectedOption));
        dispatch(addUserQuestionAnswer(authedUser, questionId, selectedOption));
        dispatch(hideLoading());
      })
      .then(callback);
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, callback) {
  return (dispatch, getState) => {
    dispatch(showLoading());

    const { authedUser } = getState();

    saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addUserQuestion(question));
        dispatch(hideLoading());
      })
      .then(callback);
  };
}
