import { SET_QUESTIONS } from "../actions/questions";

export default function setTweets(state = {}, action) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    default:
      return state;
  }
}
