import * as Constant02 from "../../../constants/notifyConstants";
const initState = [];

const reducer02 = (state = initState, action) => {
  switch (action.type) {
    case Constant02.VALUE_01_02_TYPE:
      console.log(3333);
      return state;

    case Constant02.VALUE_02_02_TYPE:
      console.log(4444);
      return state;

    default:
      return state;
  }
};

export default reducer02;
