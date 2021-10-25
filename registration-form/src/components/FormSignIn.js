import React, { useState } from "react";
import './FormSignIn.css';

export default function FormSignIn() {
  const [values, setValues] = useState({
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
    console.log("Submitting");
  }

  let validations = {
    characterscount: false,
    lowercase: false,
    uppercase: false,
    decimal: false,
    special: false
  }

  let validity = false;

  let pwd = values.password.trim();
  if (pwd.length >= 8) {
    console.log("✅ Password long engouh")
    validations.characterscount = true;
  }

  if (/[a-z]/.test(pwd)) {
    console.log("Password has a lowercase");
    validations.lowercase = true;
  }

  if (/[A-Z]/.test(pwd)) {
    console.log("Password has a Uppercase");
    validations.uppercase = true;
  }

  if (/\d/.test(pwd)) {
    console.log("Password has a Decimal");
    validations.decimal = true;
  }

  if (/\W/.test(pwd)) {
    console.log("Password has a special Charachter");
    validations.special = true;
  }

  for (const check in validations) {
    console.log(`${check}: ${validations[check]}`);
  }


  if (Object.values(validations).every(Boolean)) {
    validity = true;
  } else {
    validity = false;
  }


  return (
    <div className='FormSignIn'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email
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
        <label htmlFor="password">Password
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
        <input className="form-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}
