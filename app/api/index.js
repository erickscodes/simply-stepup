
import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/route', { prompt });
      setResponse(res.data);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error fetching response from OpenAI.');
    }
  };

  return (
    <div>
      <h1>OpenAI API Example</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
          rows="5"
          cols="50"
        />
        <button type="submit">Submit</button>
      </form>
      {response && <div><h2>Response:</h2><p>{response}</p></div>}
    </div>
  );
};

export default HomePage;
