import { saveQuestion } from "../utils/API";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
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
        dispatch(hideLoading());
      })
      .then(callback);
  };
}

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}
