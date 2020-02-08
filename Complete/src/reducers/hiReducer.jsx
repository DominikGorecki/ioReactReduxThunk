import { clickConstants } from "../actions/types";

const INITIAL_STATE = { name: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case clickConstants.CLICK_HI:
      return { name: action.payload.name };
    default:
      return state;
  }
};
