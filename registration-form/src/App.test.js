import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('Renders Component:', () => {
  test('NavBar', () => {
    render(<App />);
    const NavBar = screen.getByText(/Registration/i);
    expect(NavBar).toBeInTheDocument();
  });
  test('Form: Email field', () => {
    render(<App />);
    const email = screen.getByRole('textbox', {
      name: /email/i
    })
    expect(email).toBeInTheDocument();
  });

  test('Form: Password field', () => {
    render(<App />);
    const password = screen.getByText(/password/i);
    expect(password).toBeInTheDocument();
  });


  test('Form: Submit button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
  });
});

describe('Testing inputs:', () => {
  test('User can add an email', () => {
    render(<App />);
    const inputEl = screen.getByRole('textbox', { name: /email/i });
    userEvent.type(inputEl, "test@mail.com");
    expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
  })
  test('User can add a password', () => {
    render(<App />);
    const inputEl = screen.getByText(/password/i);
    userEvent.type(inputEl, "aaA1!QQqqqqq");
    expect(screen.getByTestId("password-input")).toHaveValue("aaA1!QQqqqqq");
  })
});
