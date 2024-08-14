// src/hooks/useFormData.js
import { useSelector } from 'react-redux';

const useFormData = () => {
  const { firstForm, secondForm } = useSelector((state) => state.form);

  const formData = {
    firstForm: Object.keys(firstForm).map(key => ({
      question: firstForm[key].question,
      answer: firstForm[key].answer,
    })),
    secondForm: Object.keys(secondForm).map(key => ({
      question: secondForm[key].question,
      answer: secondForm[key].answer,
    })),
  };

  return formData;
};

export default useFormData;
