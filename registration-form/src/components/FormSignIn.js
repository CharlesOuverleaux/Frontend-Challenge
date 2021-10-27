import React from "react";
import './FormSignIn.css';
import useSignInForm from "../hooks/useSignInForm";

export default function FormSignIn({submitForm}) {
  const { values, handleChange, handleSubmit, validations} = useSignInForm();

  return (
    <div className='FormSignIn'>
      <form onSubmit={e => handleSubmit(e, submitForm)}>
        <label htmlFor="email" className='form-email'>Email
          {/* added to highlight on label click */}
          <input
            type="email"
            name="email"
            placeholder="test@test.de"
            id="email"
            required
            values={values.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className='form-password'>Password
          <input
            type="password"
            name="password"
            placeholder="********"
            id="password"
            required
            values={values.password}
            onChange={handleChange}
          />
        </label>
        {/* replace by favicons */}
        <div className="form-validations">
          <p>{validations.characterscount ? "✔️" : "❌"} 8+ characters</p>
          <p>{validations.lowercase ? "✔️" : "❌"} lowercase letter</p>
          <p>{validations.uppercase ? "✔️" : "❌"} uppercase letter</p>
          <p>{validations.decimal ? "✔️" : "❌"} number</p>
          <p>{validations.special ? "✔️" : "❌"} special character</p>
        </div>
        <button className="form-submit" type="submit" values={values}>Submit</button>
      </form>
    </div>
  );
}
