import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Footer", () => {
    it("Footer renders the given text prop", () => {
        render (
            <Footer text="Made in Canada" />
        );

        expect(screen.getByText(/Made in Canada/)).toBeInTheDocument();
    })
})