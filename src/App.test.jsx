import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("converts °C to °F", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.type(screen.getByLabelText(/celsius/i), "100");

  expect(screen.getByLabelText(/fahrenheit/i)).toHaveValue(212);
});

it("converts °F to °C", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.type(screen.getByLabelText(/fahrenheit/i), "212");

  expect(screen.getByLabelText(/celsius/i)).toHaveValue(100);
});
