import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/presentation/test'
import { Authentication, AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: AuthenticationParams

  auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    return Promise.resolve(this.account)
  }
}

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
