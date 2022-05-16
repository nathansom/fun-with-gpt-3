import Button from "../Button/Button";

type PromptFormProps = {
  promptInput: string;
  updatePrompt: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  submitPrompt: (e: React.FormEvent<HTMLFormElement>) => void;
};

const PromptForm = ({ promptInput, updatePrompt, submitPrompt }:PromptFormProps) => {
    return (
      <form className="prompt-form" onSubmit={submitPrompt}>
        <label htmlFor="prompt-selection">Example prompts:</label>
        <select
          id="prompt-selection"
          name="prompt-selection"
          className="prompt-selection"
          onChange={updatePrompt}
        >
          <option> --- Try some of these fun prompts! --- </option>
          <option>Write a love song</option>
          <option>Write a sad song</option>
          <option>Write a poem about two laughing horses</option>
          <option>Write a one-liner joke about programming</option>
          <option>Write a practical joke about programming</option>
          <option>
            How many software engineers does it take to light a light bulb?
          </option>
        </select>
        <label htmlFor="prompt-input">Enter prompt:</label>
        <textarea
          id="prompt-input"
          name="prompt-input"
          className="prompt-input"
          value={promptInput}
          onChange={updatePrompt}
        />
        <Button label="Submit" type="primary" />
      </form>
    );
}

export default PromptForm;