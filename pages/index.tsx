import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/Button/Button';
import React, { TextareaHTMLAttributes, useState } from 'react';
import PromptForm from '../components/PromptForm/PromptForm';

const Home: NextPage = () => {
  const [prompt, setPrompt] = useState<string>("");

  const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPrompt('');
  }

  return (
    <div className="container">
      <header>
        <h1>Fun with AI</h1>
      </header>
      <main>
        <section>
          <p>prompt:{prompt}</p>
          <PromptForm
            promptInput={prompt}
            updatePrompt={handleChange}
            submitPrompt={handleSubmit}
          />
        </section>

        <section>
          <h2>Responses</h2>
          <article className="response-container">
            <div className="response-output">
              <h3>Prompt:</h3>
              <p>oooooo</p>
            </div>
            <div className="response-output">
              <h3>Response:</h3>
              <p>ppppppp</p>
            </div>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Home
