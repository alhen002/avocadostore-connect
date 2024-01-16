import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

it("should have Hallo text", () => {
  render(Home());
  const myElement = screen.getByText("Hallo"); // ACT
  expect(myElement).toBeInTheDocument();
});
