import { tryConvert } from "../utils/tryConvert";

export default function reducer(state, action) {
  switch (action.type) {
    case "set_C":
      return { C: action.value, F: tryConvert(action.value, "toF") };
    case "set_F":
      return { F: action.value, C: tryConvert(action.value, "toC") };
    default:
      throw new Error("Invalid action type");
  }
}
