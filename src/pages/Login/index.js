import React from 'react'
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import { LoginContainer } from '../../components/Style'
// Component
import LoginForm from '../../components/FormLogin'

export default function Login() {
  return (
    <LoginContainer>
      <h1>Login</h1>
      <LoginForm />
    </LoginContainer>
  )
}
