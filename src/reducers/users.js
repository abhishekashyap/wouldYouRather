import { SET_USERS } from "../actions/users";

export default function setUsers(state = {}, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        ...action.users,
      };

    default:
      return state;
  }
}
