import React from "react";

export default function FormSignIn() {
  return (
    <div className='FormSignIn'>
      <form>
        <div className="form-email">
          <label htmlFor="email">Email</label>
          {/* added to highlight on label click */}
          <input
            type="email"
            name="email"
            placeholder="test@test.de"
            id="email"
            required
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
          />
        </div>
        <div className="form-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
