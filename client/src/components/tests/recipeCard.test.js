import { render, fireEvent } from "@testing-library/react";
import { toHaveTextContent } from "@testing-library/jest-dom";
import Favorites from "../Favorites";

describe("Favorites", () => {
  it("renders the component", () => {
    const getByText = render(<Favorites />);
  });
});
