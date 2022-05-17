import PromptForm from "./PromptForm";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockUpdatePrompt = jest.fn();
export const mockSubmit = jest.fn( e => e.preventDefault() );

beforeEach( () => {
    render(
      <PromptForm
        promptInput=""
        updatePrompt={mockUpdatePrompt}
        submitPrompt={mockSubmit}
      />
    );
})

describe("PromptForm", () => {
    it("callback function is called when enter prompt", () => {
        fireEvent.change(screen.getByRole('textbox'), {target: {value: "Hello"}});
        expect(mockUpdatePrompt).toBeCalled();
    });

    it("callback function is called when click submit", () => {
      fireEvent.click(screen.getByRole("button"));
      expect(mockSubmit).toBeCalled();
    });
})


