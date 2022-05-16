import Button from "../Button/Button";

type PromptFormProps = {
  promptInput: string;
  updatePrompt: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submitPrompt: (e: React.FormEvent<HTMLFormElement>) => void;
};

const PromptForm = ({ promptInput, updatePrompt, submitPrompt }:PromptFormProps) => {
    return (
        <form onSubmit={submitPrompt}>
          <label htmlFor="prompt-input">Enter prompt</label>
          <textarea 
            id="prompt-input" 
            name="prompt-input" 
            value={promptInput} 
            onChange={updatePrompt} 
          />
          <Button label="Submit" type="primary" />
        </form>
    );
}

export default PromptForm;