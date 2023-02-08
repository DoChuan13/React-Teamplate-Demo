import * as stateConstants from "../../constants/stateConstants";

export const stateAction_01 = (value) => {
  return {
    type: stateConstants.VALUE_01_TYPE,
    payload: value,
  };
};

export const stateAction_02 = (value) => {
  return {
    type: stateConstants.VALUE_02_TYPE,
    payload: value,
  };
};
