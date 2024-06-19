import { render, screen } from "@testing-library/react";
import App from "./App";

describe("something truthy and falsy", () => {
  it("displays hello world", () => {
    render(<App />);
    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
