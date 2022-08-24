import { SignUp } from '@/presentation/pages/'
import { AddAccountSpy, ValidationStub } from '@/presentation/test'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  MakeLogin: React.FC
}

const validationStub = new ValidationStub()
const addAccountSpy = new AddAccountSpy()

const Router: React.FC<Props> = ({ MakeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MakeLogin />} />
        <Route
          path="/signup"
          element={
            <SignUp validation={validationStub} addAccount={addAccountSpy} />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
