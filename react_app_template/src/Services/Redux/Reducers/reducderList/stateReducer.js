import * as Constant01 from "../../../constants/stateConstants";

const initState = [];

const reducer01 = (state = initState, action) => {
  switch (action.type) {
    case Constant01.VALUE_01_TYPE:
      console.log(1111);
      return [...state, action.payload];

    case Constant01.VALUE_02_TYPE:
      console.log(2222);
      return state;

    default:
      return state;
  }
};

export default reducer01;
