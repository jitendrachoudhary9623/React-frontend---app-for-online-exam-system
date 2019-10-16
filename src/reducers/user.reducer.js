import { UPDATE_LOGIN } from "../action.types";
export default function userReducer(state = { username: "", loggedIn: false }, { type, payload }) {

  if (type == UPDATE_LOGIN) {
    return payload;
  }
  return state;
}