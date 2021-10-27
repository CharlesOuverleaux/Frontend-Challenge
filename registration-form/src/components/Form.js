import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import './Form.css';
import SuccessMessage from "./SuccessMessage";

export default function Form() {
  const [isSubmitted, SetIsSubmitted] = useState(false);

  const submitForm = () => {
    SetIsSubmitted(true);
  };


  return (
    <div className='Form-Container'>
      { isSubmitted ? <SuccessMessage /> : <FormSignIn submitForm={submitForm}/> }
    </div>
  );
}
