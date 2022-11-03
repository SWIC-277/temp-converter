import { render, screen } from "@testing-library/react";
import Input from "./NumberInput";

it("renders an input with the proper label and id when provided both", () => {
  render(<Input label="Test" id="test" />);

  const input = screen.getByLabelText("Test");
  expect(input).toBeInTheDocument();
});
