import { useReducer } from "react";
import reducer from "./reducer";

export default function useTemp() {
  const [state, dispatch] = useReducer(reducer, { C: 0, F: 0 });

  const setTemp = (value, unit) => {
    dispatch({ type: `set_${unit}`, value });
  };

  return [state, setTemp];
}
