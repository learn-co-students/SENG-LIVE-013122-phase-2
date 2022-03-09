import { useState } from 'react';

export function useForm(initialFormState) {
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    setFormState(formState => ({...formState, [name]: value}))
  }

  return {
    formState,
    setFormState,
    handleChange
  }
}