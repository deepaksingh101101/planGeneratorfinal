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
    customerGroup1: '',
    customerGroup1Description: '',
    customerGroup1IncomeLevel: '',
    customerGroup2: '',
    customerGroup2Description: '',
    customerGroup2IncomeLevel: '',
    customerGroup3: '',
    customerGroup3Description: '',
    customerGroup3IncomeLevel: ''
  },
  fourthForm: {
    product1Name: '',
    product1Description: '',
    product2Name: '',
    product2Description: '',
    product3Name: '',
    product3Description: '',
    product4Name: '',
    product4Description: '',
    product5Name: '',
    product5Description: ''
  },
  fifthForm: {
    successDriver1: '',
    successDriver2: '',
    successDriver3: '',
    weakness1: '',
    weakness2: '',
    weakness3: ''
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
    },
    setFourthForm: (state, action) => {
      const { name, value } = action.payload;
      state.fourthForm[name] = value;
    },
    setFifthForm: (state, action) => {
      const { name, value } = action.payload;
      state.fifthForm[name] = value;
    }
  }
});

export const { setBusinessType, setBusinessPlan, setSecondForm, setProductService, setSalesChannel, setThirdForm, setFourthForm, setFifthForm } = formSlice.actions;
export default formSlice.reducer;
