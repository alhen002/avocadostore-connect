import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/pages";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Home />);
    const heading = screen.getByText("Hallo");
    expect(heading).toBeInTheDocument();
  });
});
