import React, { Suspense } from 'react'
import { GlobalStyle } from '../components/Style';
import Routes from '../routes'


export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>} >
      <GlobalStyle />
      <Routes />
    </Suspense>
  );
}
