import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from './services/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

// import addPassword from './services/apis/password/__mocks__/addPassword'
// import deletePassword from './services/apis/password/__mocks__/deletePassword'
// import { addPassword } from './services/store/actions'

// --- MOCK ---
// password
jest.mock('./services/apis/password/fetchPasswords')
jest.mock('./services/apis/password/fetchPassword')
jest.mock('./services/apis/password/addPassword')
jest.mock('./services/apis/password/editPassword')
jest.mock('./services/apis/password/deletePassword')
// auth
jest.mock('./services/apis/auth/login')
jest.mock('./services/apis/auth/register')
jest.mock('./services/apis/auth/loginWithGoogle')
jest.mock('./services/apis/auth/listener')
jest.mock('./services/apis/auth/logout')

console.error = () => {};

afterEach(() => {
  cleanup()
})

const appHtml = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)

test('App should render Home correctly', () => {
  const app = render(appHtml)

  expect(app.queryByTestId("navigation-brand")).toBeInTheDocument()
  expect(app.queryByTestId("password-list")).toBeInTheDocument()
  expect(app.queryByTestId("table-password-list")).toHaveTextContent(/url/i)
  expect(app.queryByTestId("table-password-list")).toHaveTextContent(/username/i)
  expect(app.queryByTestId("table-password-list")).toHaveTextContent(/password/i)
  expect(app.queryByTestId("table-password-list")).toHaveTextContent(/tools/i)
  expect(app.queryByTestId("button-add-password")).toBeInTheDocument()

})

test("Fetch Password data", () => {
  const app = render(appHtml)

  expect(app.queryByTestId("password-list-item")).toBeInTheDocument()
  expect(app.queryByTestId("password-list-item")).toHaveTextContent(/[google.com]/i)
  expect(app.queryByTestId("password-list-item")).toHaveTextContent(/[sampleusername]/i)
  expect(app.queryByTestId("password-list-item")).toHaveTextContent(/[samplepassword]/i)
  expect(app.queryByTestId("password-list-item")).not.toHaveTextContent(/1567857365/i)
})

test("Add password", () => {
  const app = render(appHtml)

  fireEvent.click(app.queryByTestId("button-add-password"))
  expect(app.queryByTestId("add-password--title")).toHaveTextContent(/[add password]/i);
  expect(app.queryByTestId("add-password--input--url")).toBeInTheDocument();
  expect(app.queryByTestId("add-password--input--username")).toBeInTheDocument();
  expect(app.queryByTestId("add-password--input--password")).toBeInTheDocument();
  expect(app.queryByTestId("add-password--input--password-validate")).toBeInTheDocument();

  const url = { target: { value: 'http://helloworld.com' } }
  const username = { target: { value: 'justarya' } }
  const password = { target: { value: 'helloworld' } }
  fireEvent.change(app.queryByTestId("add-password--input--url"), url)
  fireEvent.change(app.queryByTestId("add-password--input--username"), username)
  fireEvent.change(app.queryByTestId("add-password--input--password"), password)

  fireEvent.click(app.queryByTestId("add-password--submit"))

  // expect(addPassword).toHaveBeenCalled()
})

test("Edit password", (done) => {
  const app = render(appHtml)

  fireEvent.click(app.queryByTestId("button--password-list-item--edit"))

  expect(app.queryByTestId("edit-password--title")).toHaveTextContent(/[edit password]/i);
  setTimeout(() => {
    expect(app.queryByTestId("edit-password--input--url")).toHaveValue('http://www.google.com');
    expect(app.queryByTestId("edit-password--input--username")).toHaveValue("sampleusername");
    expect(app.queryByTestId("edit-password--input--password")).toHaveValue("samplepassword");
    
    const url = { target: { value: 'http://helloworld.com' } }
    const username = { target: { value: 'justarya' } }
    const password = { target: { value: 'helloworld' } }
    fireEvent.change(app.queryByTestId("edit-password--input--url"), url)
    fireEvent.change(app.queryByTestId("edit-password--input--username"), username)
    fireEvent.change(app.queryByTestId("edit-password--input--password"), password)

    fireEvent.click(app.queryByTestId("edit-password--submit"))

    done()
  })
})

test("Delete password", () => {
  const app = render(appHtml)
  window.scrollTo = () => {};

  fireEvent.click(app.queryByTestId("button--password-list-item--delete"))

  fireEvent.click(app.getByText(/delete/i))

  // expect(deletePassword).toHaveBeenCalled()
})