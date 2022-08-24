import { SignUp } from '@/presentation/pages/'
import { ValidationStub } from '@/presentation/test'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

type Props = {
  MakeLogin: React.FC
}

const validationStub = new ValidationStub()

const Router: React.FC<Props> = ({ MakeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<MakeLogin />} />
        <Route
          path="/signup"
          element={<SignUp validation={validationStub} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
