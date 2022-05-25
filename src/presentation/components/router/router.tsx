import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { AuthenticationSpy, ValidationStub } from '@/presentation/test'

const validationSpy = new ValidationStub()
const authenticationSpy = new AuthenticationSpy()

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              validation={validationSpy}
              authentication={authenticationSpy}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
