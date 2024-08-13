// src/features/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  businessType: { value: '', label: '' },
  businessPlan: { value: '', label: '' },
  secondForm: {
    businessName: '',
    businessDescription: '',
    numberOfEmployees: '',
    productService: { value: '', label: '' },
    salesChannel: { value: '', label: '' },
    customerLocation: '',
  },
  thirdForm: {
    customerGroup1Description: '',
    customerGroup1IncomeLevel: '',
    customerGroup2Description: '',
    customerGroup2IncomeLevel: '',
    customerGroup3Description: '',
    customerGroup3IncomeLevel: ''
  }
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setBusinessType: (state, action) => {
      state.businessType = action.payload;
    },
    setBusinessPlan: (state, action) => {
      state.businessPlan = action.payload;
    },
    setSecondForm: (state, action) => {
      const { name, value } = action.payload;
      state.secondForm[name] = value;
    },
    setProductService: (state, action) => {
      state.secondForm.productService = action.payload;
    },
    setSalesChannel: (state, action) => {
      state.secondForm.salesChannel = action.payload;
    },
    setThirdForm: (state, action) => {
      const { name, value } = action.payload;
      state.thirdForm[name] = value;
    }
  }
});

export const { setBusinessType, setBusinessPlan, setSecondForm, setProductService, setSalesChannel, setThirdForm } = formSlice.actions;
export default formSlice.reducer;
