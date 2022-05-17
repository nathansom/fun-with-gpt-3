import Button from "./Button";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
    it("Button component shows text prop and has correct CSS class", () => {
        render(<Button label="Register" type="primary" />); 

        expect(screen.getByText(/Register/)).toBeInTheDocument();
        expect(document.querySelector('.button-primary')).toBeInTheDocument();
    })

    it("Button component shows text prop and has correct CSS class", () => {
      render(<Button label="Signup" type="secondary" />);

      expect(screen.getByText(/Signup/)).toBeInTheDocument();
      expect(document.querySelector(".button-secondary")).toBeInTheDocument();
    });
})