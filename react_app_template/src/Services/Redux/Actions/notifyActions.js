import * as notifyConstants from "../../Constants/notifyConstants";

export const notifyAction_01 = (value) => {
  return {
    type: notifyConstants.VALUE_01_02_TYPE,
    payload: value,
  };
};

export const notifyAction_02 = (value) => {
  return {
    type: notifyConstants.VALUE_02_02_TYPE,
    payload: value,
  };
};
