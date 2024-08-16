import axios from 'axios';

const apiKey = import.meta.env.API_KEY; // Replace with your actual API key

export const getSuggestionsFromOpenAI = async (formData, activeField) => {
  let prompt = `
    Based on the following form data, provide four distinct suggestions for the ${activeField.startsWith('product') || activeField.startsWith('successDriver') || activeField.startsWith('weakness') ? 'fifth' : activeField.startsWith('investmentItem') ? 'sixth' : 'third'} form fields and all suggestions should be answers to questions.
    First Form (Business Plan Objective):
    ${Object.values(formData.firstForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
    Second Form (Basic Business Information):
    ${Object.values(formData.secondForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  `;

  if (formData.thirdForm) {
    prompt += `
    Third Form (Customer Targeting):
    ${Object.values(formData.thirdForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
    `;
  }

  if (formData.fourthForm) {
    prompt += `
    Fourth Form (Product or Service Details):
    ${Object.values(formData.fourthForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
    `;
  }

  if (formData.fifthForm) {
    prompt += `
    Fifth Form (Success Drivers and Weaknesses):
    ${Object.values(formData.fifthForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
    `;
  }

  prompt += `
    ${activeField.startsWith('product') || activeField.startsWith('successDriver') || activeField.startsWith('weakness') ? 'Fifth Form Question' : activeField.startsWith('investmentItem') ? 'Sixth Form Question' : 'Third Form Question'} (Suggestion should have a maximum of 10 words):
    - ${activeField}: ${activeField.startsWith('product') ? 'What type of product or service will you offer? Give suggestions for this question' : activeField.startsWith('successDriver') ? 'What success drivers will you focus on? Give suggestions for this' : activeField.startsWith('weakness') ? 'What are potential weaknesses?' : activeField.startsWith('investmentItem') ? 'What are the possible areas of investment for your business?' : 'What type of customers will you target?'}
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

export const getBusinessPlanFromOpenAI = async (formData) => {
  const prompt = `
  Based on the following form data, generate a detailed marketing strategy report with all the sections and sub-sections. Ensure each section adheres to the specified word count.

  First Form (Business Plan Objective):
  ${Object.values(formData.firstForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  
  Second Form (Basic Business Information):
  ${Object.values(formData.secondForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  
  Third Form (Customer Targeting):
  ${Object.values(formData.thirdForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  
  Fourth Form (Product or Service Details):
  ${Object.values(formData.fourthForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  
  Fifth Form (Success Drivers and Weaknesses):
  ${Object.values(formData.fifthForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  
  Sixth Form (Investment Items):
  ${formData.sixthForm.investmentItems.map(item => `Item: ${item.item.answer}, Amount: ${item.amount.answer}`).join('\n')}
  
  Seventh Form (Financials):
  ${Object.values(formData.seventhForm).map(item => `${item.question}: ${item.answer}`).join('\n')}
  
  Generate a detailed business plan with the following sections and sub-sections, adhering to the specified word counts. Do not include any asterisks, hashtags, word counts, hyphens, or extra characters.

  1. Executive Summary (150 words)
     Overview of Business (50 words)
     Marketing Objectives (50 words)
     Key Strategies (50 words)
  2. Business Overview
     Company Information (25 words)
     Business Model (45 words)
     Unique Selling Proposition (USP) (55 words)
  3. Market Research
     Target Market
       Customer Segments (50 words)
       Geographical Focus (40 words)
       Market Size & Growth (35 words)
     Competitor Analysis
       Direct Competitors
       Indirect Competitors
       SWOT Analysis
         Strengths (40 words)
         Weaknesses (40 words)
         Opportunities (40 words)
         Threats (40 words)
  4. Customer Insights
     Buyer Personas (55 words)
     Customer Journey (55 words)
     Customer Pain Points (55 words)
  5. Brand Positioning
     Current Brand Perception (55 words)
     Desired Brand Positioning (55 words)
     Brand Values & Mission (55 words)
     Brand Voice & Messaging (55 words)
  6. Marketing Objectives & Goals (300 words)
     Primary Objectives (110 words)
     SMART Goals (110 words)
     Key Performance Indicators (KPIs) (110 words)
  7. Marketing Channels & Campaign Strategy
     Channel Selection (70 words)
     Campaign Strategies by Platform
       1. Facebook & Instagram
         Target Audience (65 words)
         Content Strategy (65 words)
         Ad Strategy (65 words)
         Example Campaign (65 words)
       2. LinkedIn
         Target Audience (65 words)
         Content Strategy (65 words)
         Ad Strategy (65 words)
         Example Campaign (65 words)
  8. Budget & Resource Allocation
     Overall Marketing Budget (100 words)
     Channel-Specific Budgets (100 words)
     Resource Allocation (100 words)
  9. Timeline & Execution Plan
     Campaign Timelines (100 words)
     Milestones & Deadlines (100 words)
     Team Responsibilities (100 words)
  10. Performance Tracking & Optimization
      Tracking Tools (100 words)
      Reporting & Analysis (100 words)
      Optimization Plan (100 words)
  11. Legal & Compliance Considerations
      Data Privacy & GDPR Compliance (150 words)
      Advertising Regulations (150 words)
  `;

  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that helps with generating detailed business plans based on provided data.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      max_tokens: 2000,
      temperature: 0.7
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  return response.data.choices[0].message.content.trim();
};

