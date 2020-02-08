import { clickConstants } from "../actions/types";

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clickConstants.CLICK_COUNTER:
      return state + 1;
    default:
      return state;
  }
};
