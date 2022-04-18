import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders registration form', () => {
  render(<App />);
  screen.getByRole('heading', { name: /sign up/i });
  screen.getByPlaceholderText('First Name');
  screen.getByPlaceholderText('Last Name');
  screen.getByPlaceholderText('Email Address');
  screen.getByPlaceholderText('Password');
  screen.getByRole('checkbox', {
    name: 'I agree with terms and conditions',
  });
  screen.getByRole('button', { name: /sign up/i });
  screen.getByText('sponsored by');
  screen.getByRole('link', { name: 'Sign in' });
  screen.getByText('Already have an account?');
  const links = screen.getAllByRole('link');
  expect(links.length).toBe(4);
});

test('successful registration', () => {
  render(<App />);

  const name = screen.getByPlaceholderText('First Name');
  const surname = screen.getByPlaceholderText('Last Name');
  const email = screen.getByPlaceholderText('Email Address');
  const password = screen.getByPlaceholderText('Password');
  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree with terms and conditions',
  });
  const signUpButton = screen.getByRole('button', { name: /sign up/i });
  userEvent.type(name, 'John');
  userEvent.type(surname, 'Doe');
  userEvent.type(email, 'john@test.com');
  userEvent.type(password, 'Pas$w0rd');
  userEvent.click(checkbox);
  userEvent.click(signUpButton);
  const table = screen.getByRole('table');
  within(table).getByText('John');
  within(table).getByText('Doe');
  within(table).getByText('john@test.com');
  within(table).getByText(/\d{2}\/\d{2}\/\d{4}, \d{2}:\d{2}:\d{2}/i);
});

test('invalid submission', () => {
  render(<App />);
  const signUpButton = screen.getByRole('button', { name: /sign up/i });

  userEvent.click(signUpButton);

  const inputs = screen.getAllByTestId('form-input');

  inputs.forEach((input) => {
    expect(input).toHaveClass('invalid');
  });
});

test('invalid names input', () => {
  render(<App />);

  const name = screen.getByPlaceholderText('First Name');
  const surname = screen.getByPlaceholderText('Last Name');
  const email = screen.getByPlaceholderText('Email Address');

  userEvent.click(name);
  userEvent.click(surname);

  expect(screen.getByText('Required')).toBeInTheDocument();

  userEvent.click(email);

  expect(screen.getAllByText('Required').length).toBe(2);
});

test('invalid email', () => {
  render(<App />);

  const name = screen.getByPlaceholderText('First Name');
  const email = screen.getByPlaceholderText('Email Address');

  userEvent.type(email, 'not-valid@email');
  userEvent.click(name);

  expect(screen.getByText('Please enter valid e-mail')).toBeInTheDocument();

  userEvent.clear(email);
  userEvent.type(email, 'valid@email.com');

  expect(
    screen.queryByText('Please enter valid e-mail')
  ).not.toBeInTheDocument();
});

test('invalid password', () => {
  const errorMessage =
    'At least 8 characters, one upper case, one lower case letter, one digit and one special symbol';
  render(<App />);

  const email = screen.getByPlaceholderText('Email Address');
  const password = screen.getByPlaceholderText('Password');

  // No special character
  userEvent.type(password, 'Passw0rd');
  userEvent.click(email);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();

  userEvent.clear(password);
  // No capital letter
  userEvent.type(password, 'pa$sw0rd');
  userEvent.click(email);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();

  userEvent.clear(password);
  // No number
  userEvent.type(password, 'Pa$sword');
  userEvent.click(email);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();

  userEvent.clear(password);
  // No lowercase letter
  userEvent.type(password, 'PA$SW0RD');
  userEvent.click(email);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();

  userEvent.clear(password);
  // Valid password
  userEvent.type(password, 'Pa$sw0rd');
  userEvent.click(email);

  expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
});

test('logs registered users in descending order', () => {
  render(<App />);

  const name = screen.getByPlaceholderText('First Name');
  const surname = screen.getByPlaceholderText('Last Name');
  const email = screen.getByPlaceholderText('Email Address');
  const password = screen.getByPlaceholderText('Password');
  const checkbox = screen.getByRole('checkbox', {
    name: 'I agree with terms and conditions',
  });
  const signUpButton = screen.getByRole('button', { name: /sign up/i });
  // First user
  userEvent.type(name, 'John');
  userEvent.type(surname, 'Doe');
  userEvent.type(email, 'john@test.com');
  userEvent.type(password, 'Pas$w0rd');
  userEvent.click(checkbox);
  userEvent.click(signUpButton);
  // Second user
  userEvent.type(name, 'Jane');
  userEvent.type(surname, 'Doe');
  userEvent.type(email, 'jane@test.com');
  userEvent.type(password, 'Pas$w0rd');
  userEvent.click(checkbox);
  userEvent.click(signUpButton);

  const loggedUsers = screen.getAllByTestId('registered-user-entry');
  expect(loggedUsers.length).toBe(2);

  within(loggedUsers[0]).getByText('Jane');
  within(loggedUsers[1]).getByText('John');
});
