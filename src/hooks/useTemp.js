import { useReducer } from "react";
import reducer from "./reducer";

export default function useTemp() {
  const [state, dispatch] = useReducer(reducer, { C: 0, F: 0 });

  const setTemp = (e) => {
    dispatch({ type: `set_${e.target.dataset.unit}`, value: e.target.value });
  };

  return [state, setTemp];
}
