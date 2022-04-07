import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../button";

it("rendering", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<Button></Button>, div);
  render(<Button />);
  const myElement = screen.getByText(/click on me/);
  expect(myElement).toBeInTheDocument();
});
