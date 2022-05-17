import ResponseCard from "./ResponseCard";
import type { ResponseProps } from "./ResponseCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockData: ResponseProps = {
    prompt: "write a song",
    response: "lalala"
}

describe("ResponseCard", () => {
    it("ResponseCard shows prompt and response", () => {
        render(
            <ResponseCard prompt={mockData.prompt} response={mockData.response} />
        );

        expect(screen.getByText(/write a song/)).toBeInTheDocument();
        expect(screen.getByText(/lalala/)).toBeInTheDocument();
    })
})