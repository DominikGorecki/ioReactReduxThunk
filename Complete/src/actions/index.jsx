import { clickConstants } from "./types";

export const clickCounter = () => dispatch => {
  dispatch({ type: clickConstants.CLICK_COUNTER });
};

export const clickHi = name => dispatch => {
  dispatch({ type: clickConstants.CLICK_HI, payload: { name } });
};
