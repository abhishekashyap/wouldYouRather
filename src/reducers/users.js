import {
  SET_USERS,
  ADD_USER_QUESTION,
  ADD_USER_QUESTION_ANSWER,
} from "../actions/users";

export default function setUsers(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      };
    case ADD_USER_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.questionId]: action.selectedOption,
          },
        },
      };

    default:
      return state;
  }
}
