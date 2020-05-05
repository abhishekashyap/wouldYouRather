export const SET_USERS = "SET_USERS";
export const ADD_USER_QUESTION_ANSWER = "ADD_USER_QUESTION_ANSWER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  };
}

export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {
  return {
    type: ADD_USER_QUESTION_ANSWER,
    authedUser,
    questionId,
    selectedOption,
  };
}
