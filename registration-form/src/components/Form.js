import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import './Form.css';

export default function Form() {
  const [isSubmitted, SetIsSubmitted] = useState(false);

  const submitForm = () => {
    SetIsSubmitted(true);
  };

  const successMsg = <h2 className='Success-Message'>Thank you! <br />You have signed in!</h2>
  return (
    <div className='Form-Container'>
      { isSubmitted ? successMsg : <FormSignIn submitForm={submitForm}/> }
    </div>
  );
}
