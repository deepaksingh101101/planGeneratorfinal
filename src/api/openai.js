import axios from 'axios';

export const getSuggestionsFromOpenAI = async (formData, activeField) => {
  const apiKey = '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';

  let prompt = `
    Based on the following form data, provide four distinct suggestions for the ${activeField.startsWith('product') ? 'fourth' : 'third'} form fields.
    First Form (Business Plan Objective):
    ${formData.firstForm.map(item => `${item.question}: ${item.answer}`).join('\n')}
    Second Form (Basic Business Information):
    ${formData.secondForm.map(item => `${item.question}: ${item.answer}`).join('\n')}
  `;

  if (formData.thirdForm && formData.thirdForm.length > 0) {
    prompt += `
    Third Form (Customer Targeting):
    ${formData.thirdForm.map(item => `${item.question}: ${item.answer}`).join('\n')}
    `;
  }

  prompt += `
    ${activeField.startsWith('product') ? 'Fourth Form Question' : 'Third Form Question'} (Suggestion should have maximum 10 words):
    - ${activeField}: ${activeField.startsWith('product') ? 'What type of product or service will you offer?' : 'What type of customers will you target?'}
    Suggestions:
    ${activeField}:
    1. [Suggestion 1]
    2. [Suggestion 2]
    3. [Suggestion 3]
    4. [Suggestion 4]
  `;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that helps with form suggestions based on provided data.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 300,
      temperature: 0.7
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  const suggestionsText = response.data.choices[0].message.content.trim();
  const parseSuggestions = (section) => {
    const regex = new RegExp(`${section}:\n(.*)`, 's');
    const match = suggestionsText.match(regex);
    if (match && match[1]) {
      return match[1].split('\n').map(s => s.replace(/^\d+\.\s*/, '').trim()).filter(s => s);
    }
    return [];
  };

  return parseSuggestions(activeField);
};
