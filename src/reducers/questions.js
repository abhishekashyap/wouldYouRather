import { SET_QUESTIONS, ADD_QUESTION } from "../actions/questions";

export default function setTweets(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ADD_QUESTION:
      return {
        ...state,
        ...action.questions,
      };

    default:
      return state;
  }
}
