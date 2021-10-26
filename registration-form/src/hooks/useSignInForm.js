import { useState } from "react";

const useSignInForm = () => {
  const[values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = evt => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
  }

  return { values, handleChange, handleSubmit };
}

export default useSignInForm;
