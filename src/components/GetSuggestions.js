// src/components/GetSuggestions.js
import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useFormData from '../hooks/useFormData';
import { getSuggestionsFromOpenAI } from '../api/openai';
import { setSuggestions } from '../features/formSlice';

const GetSuggestions = () => {
  const dispatch = useDispatch();
  const formData = useFormData();

  useEffect(() => {
    const fetchSuggestions = async () => {
      const suggestions = await getSuggestionsFromOpenAI(formData);
      dispatch(setSuggestions(suggestions));
    };

    fetchSuggestions();
  }, [dispatch, formData]);

  return <div>Fetching suggestions...</div>;
};

export default GetSuggestions;
