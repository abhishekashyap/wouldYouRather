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

export function handleAddQuestion(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState;

    dispatch(showLoading());

    return saveQuestion({
      text,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

export function setQuestions(questions) {
  return {
    type: SET_QUESTIONS,
    questions,
  };
}
