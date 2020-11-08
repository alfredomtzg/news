import React from 'react'
// These imports load individual services into the firebase namespace.
import 'firebase/auth';

// Component
import LoginForm from '../../components/FormLogin'

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <LoginForm />
    </>
  )
}
