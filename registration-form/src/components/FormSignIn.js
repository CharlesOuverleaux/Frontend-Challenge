import React from "react";
import './FormSignIn.css';
import useSignInForm from "../hooks/useSignInForm";

export default function FormSignIn({submitForm}) {
  const { values, handleChange, handleSubmit, validations} = useSignInForm();

  return (
    <div>
      <form id='FormSignIn' onSubmit={e => handleSubmit(e, submitForm)}>
        <label htmlFor="email" className='FormLabel'>Email
          {/* added to highlight on label click */}
          <input
            type="email"
            name="email"
            placeholder="test@test.de"
            id="email"
            className='FormInput'
            data-testid="email-input"
            required
            values={values.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className='FormLabel'>Password
          <input
            type="password"
            name="password"
            placeholder="********"
            id="password"
            className='FormInput'
            data-testid='password-input'
            required
            values={values.password}
            onChange={handleChange}
          />
        </label>
        {/* replace by favicons */}
        <div id="FormValidations">
          <p className='FormValidation'>{validations.characterscount ? "✔️" : "❌"} 8+ characters</p>
          <p className='FormValidation'>{validations.lowercase ? "✔️" : "❌"} lowercase letter</p>
          <p className='FormValidation'>{validations.uppercase ? "✔️" : "❌"} uppercase letter</p>
          <p className='FormValidation'>{validations.decimal ? "✔️" : "❌"} number</p>
          <p className='FormValidation'>{validations.special ? "✔️" : "❌"} special character</p>
        </div>
        <button id="FormSubmit" type="submit" values={values}>Submit</button>
      </form>
    </div>
  );
}
