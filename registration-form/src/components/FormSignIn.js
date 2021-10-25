import React, { useState } from "react";

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

  return (
    <div className='FormSignIn'>
      <form onSubmit={handleSubmit}>
        <div className="form-email">
          <label htmlFor="email">Email</label>
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
        </div>
        <div className="form-password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            id="password"
            required
            values={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
