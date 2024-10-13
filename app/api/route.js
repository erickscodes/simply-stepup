// Router for API

import axios from 'axios';

export const config = {
  api: {
    bodyParser: true, // Enable body parsing
  },
};

// export handler function receiving a request and a response parameter
export default async function handler(req, res) {

  if (req.method === 'POST') {
    const {prompt} = req.body;

    try {
      // replace the url and call OpenAI API call
      const result = await axios.post('https://api.openai.com', {
        model: 'gpt-3.5-turbo', // Specify model
        messages: [{role: 'user', content: prompt }],
        max_tokens: 100,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.API_key}`,
          'Content-Type': '',
        },
      });
      // Response if OpenAI give result
      res.status(200).send({result})
    } catch {
      res.status(500).send({ error: 'Error fetching response from OpenAI'});
    } 
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}