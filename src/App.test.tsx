import { render, screen } from "@testing-library/react";
import App from "./App";
import * as useGetCat from "./useGetCat";

const useGetCatSpy = vi.spyOn(useGetCat, "default").mockResolvedValue({
  getCat: vi.fn(),
  url: "https://cdn2.thecatapi.com/images/d25.jpg",
  isLoading: false,
});

describe("something truthy and falsy", () => {
  it("renders the app", () => {
    render(<App />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Get Cat" })).toBeInTheDocument();
    expect(useGetCatSpy).toHaveBeenCalled();
  });
});
