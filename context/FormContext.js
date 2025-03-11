"use client"; 

import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    subtitle: "",
    ebook_price: "",
    audiobook_price: "",
    primary_audience: "",
    publishing_rights: "true",
    terms_and_conditions: "true",
  });

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for using the form context
export const useForm = () => useContext(FormContext);
