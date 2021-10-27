import { useState } from "react";

const useSignInForm = () => {

  const[values, setValues] = useState({
    email: '',
    password: '',

  });

  const[validations, setValidations] = useState({
    characterscount: false,
    lowercase: false,
    uppercase: false,
    decimal: false,
    special: false
  });

  const handleChange = e => {
    const {name, value} = e.target
    setValues({
      ...values,
      [name]: value
    })
    if (name === 'password') {
      handleValidation(value.trim())
    }
  }
  const handleValidation = password => {
    setValidations({
      characterscount: password.length >= 8,
      lowercase: /[a-z]/.test(password),
      uppercase: /[A-Z]/.test(password),
      decimal: /\d/.test(password),
      special: /\W/.test(password)
    });
  }

  const handleSubmit = (e, submitForm) => {
    e.preventDefault();
    const isValid = Object.values(validations).every(value => value);
    isValid && submitForm()
  }

  return { values, handleChange, handleSubmit, validations};
}

export default useSignInForm;
