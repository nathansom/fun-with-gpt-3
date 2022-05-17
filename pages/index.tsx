import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import PromptForm from '../components/PromptForm/PromptForm';
import ResponseCard from '../components/ResponseCard/ResponseCard';
import type { ResponseProps } from '../components/ResponseCard/ResponseCard';
import Footer from '../layouts/Footer/Footer';

const Home: NextPage = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [records, setRecords] = useState<ResponseProps[]>([]);

  useEffect(() => {
    const localData = window.localStorage.getItem("gpt-3-records");
    localData && setRecords(JSON.parse(localData) || []);
  }, [prompt, response]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    }

    const url = process.env.NEXT_PUBLIC_OPENAI_ENDPOINT as RequestInfo;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data: any) => {
        setResponse(data.choices[0].text);
        updateRecords();
      })
      .catch((e) => console.error(e));
  }

  const updateRecords = () => {
    setRecords([...records, { prompt: prompt, response: response }]);
  }

  useEffect( () => {
    updateRecords();
    records && window.localStorage.setItem("gpt-3-records", JSON.stringify(records));

    setPrompt("");
    setResponse("");
  }, [response] )

  return (
    <div className="container">
      <header>
        <h1>Fun with AI</h1>
      </header>
      <main>
        <section id="prompt-section">
          <PromptForm
            promptInput={prompt}
            updatePrompt={handleChange}
            submitPrompt={handleSubmit}
          />
        </section>

        <section id="response-section" className="response-section">
          <h2>Responses</h2>
          <div className="response-wrapper">
            {records[1] ?
              records.map((record, i) => {
                return record.prompt && record.response ? (
                  <ResponseCard
                    key={i}
                    prompt={record.prompt}
                    response={record.response}
                  />
                ) : null;
              }) :
              <div className='response-container'>
                Enter a prompt to see what the GPT-3 AI can do
              </div>}
          </div>
        </section>
      </main>
      <Footer text="Made with ❤️ by Nathan Somsa-ard" />
    </div>
  );
}

export default Home
