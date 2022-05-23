import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { ValidationStub } from '@/presentation/test'

const validationSpy = new ValidationStub()

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login validation={validationSpy} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
