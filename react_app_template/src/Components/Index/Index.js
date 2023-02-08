import React from "react";
import { useDispatch } from "react-redux";
import * as axios from "../../middleware/api/methods/methodAxios";
import * as resources from "../../config/resourcesAxiosConfig";
import * as stateActions from "../../services/redux/actions/stateActions";

function Index() {
  const dispatch = useDispatch();

  const getDatabse = () => {
    axios
      .getDatabase(resources.users, "")
      .then((res) => {
        console.log(res);
        dispatch(stateActions.stateAction_01(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(stateActions.stateAction_02(error));
      });
  };

  const test = () => {
    dispatch(stateActions.stateAction_01(12313));
    dispatch(stateActions.stateAction_02(12313));
  };

  // console.log(element);
  const testElement = () => {
    let element = document.querySelector(".footer");
    // console.log(1212);
    console.log(element);
  };

  return (
    <div>
      Index Component
      <br />
      <button type="button" className="btn" onClick={getDatabse}>
        Click Me
      </button>
      <button type="button" className="btn" onClick={test}>
        Dispatch
      </button>
      <button type="button" className="btn" onClick={testElement}>
        TestElement
      </button>
      <br />
    </div>
  );
}

export default Index;
