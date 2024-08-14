// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstForm: {
    businessType: { question: 'Is this an existing or an upcoming business?', answer: '' },
    businessPlan: { question: 'What will you use this business plan for?', answer: '' },
  },
  secondForm: {
    businessName: { question: 'Your business name (required)', answer: '' },
    businessDescription: { question: 'Your business description (required)', answer: '' },
    numberOfEmployees: { question: 'Number of employees (required)', answer: '' },
    productService: { question: 'Do you offer a product or service?', answer: '' },
    salesChannel: { question: 'How can customer get your product or service?', answer: '' },
    customerLocation: { question: 'Where do you serve your customers?', answer: '' },
  },
  thirdForm: {
    customerGroup1Description: { question: 'Customer Group 1 Description (required)', answer: '' },
    customerGroup1IncomeLevel: { question: 'Customer Group 1 Income Level (required)', answer: '' },
    customerGroup2Description: { question: 'Customer Group 2 Description (optional)', answer: '' },
    customerGroup2IncomeLevel: { question: 'Customer Group 2 Income Level (optional)', answer: '' },
    customerGroup3Description: { question: 'Customer Group 3 Description (optional)', answer: '' },
    customerGroup3IncomeLevel: { question: 'Customer Group 3 Income Level (optional)', answer: '' },
  },
  fourthForm: {
    product1Name: { question: 'Product or Service 1 Name (required)', answer: '' },
    product1Description: { question: 'Product or Service 1 Description (optional)', answer: '' },
    product2Name: { question: 'Product or Service 2 Name (optional)', answer: '' },
    product2Description: { question: 'Product or Service 2 Description (optional)', answer: '' },
    product3Name: { question: 'Product or Service 3 Name (optional)', answer: '' },
    product3Description: { question: 'Product or Service 3 Description (optional)', answer: '' },
    product4Name: { question: 'Product or Service 4 Name (optional)', answer: '' },
    product4Description: { question: 'Product or Service 4 Description (optional)', answer: '' },
    product5Name: { question: 'Product or Service 5 Name (optional)', answer: '' },
    product5Description: { question: 'Product or Service 5 Description (optional)', answer: '' },
  },
  fifthForm: {
    successDriver1: { question: 'Success Driver 1 (required)', answer: '' },
    successDriver2: { question: 'Success Driver 2 (optional)', answer: '' },
    successDriver3: { question: 'Success Driver 3 (optional)', answer: '' },
    weakness1: { question: 'Weakness 1 (optional)', answer: '' },
    weakness2: { question: 'Weakness 2 (optional)', answer: '' },
    weakness3: { question: 'Weakness 3 (optional)', answer: '' },
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFirstForm: (state, action) => {
      const { name, value } = action.payload;
      state.firstForm[name].answer = value;
    },
    setSecondForm: (state, action) => {
      const { name, value } = action.payload;
      state.secondForm[name].answer = value;
    },
    setThirdForm: (state, action) => {
      const { name, value } = action.payload;
      state.thirdForm[name].answer = value;
    },
    setFourthForm: (state, action) => {
      const { name, value } = action.payload;
      state.fourthForm[name].answer = value;
    },
    setFifthForm: (state, action) => {
      const { name, value } = action.payload;
      state.fifthForm[name].answer = value;
    },
  }
});

export const { setFirstForm, setSecondForm, setThirdForm, setFourthForm, setFifthForm } = formSlice.actions;
export default formSlice.reducer;
