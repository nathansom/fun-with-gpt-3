export type ResponseProps = {
    prompt: string;
    response: string;
}

const ResponseCard = ({ prompt, response }: ResponseProps) => {
    return (
      <article className="response-container">
        <div className="response-output">
          <h3>Prompt:</h3>
          <p>{prompt}</p>
        </div>
        <div className="response-output">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      </article>
    );
}

export default ResponseCard;