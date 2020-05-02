import { getUsers } from "../utils/API";
import { setUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getUsers().then((users) => {
      dispatch(setUsers(users));
      dispatch(hideLoading());
    });
  };
}
