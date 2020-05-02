import { getUsers } from "../utils/API";
import { setUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_USER_ID = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getUsers().then(({ users }) => {
      //   console.log(users);
      dispatch(setUsers(users));
      dispatch(setAuthedUser(AUTHED_USER_ID));
      dispatch(hideLoading());
    });
  };
}
