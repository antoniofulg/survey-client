import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '@/presentation/pages'
import { Validation } from '@/presentation/protocols/validation'

class ValidationSpy implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string

  validate(fieldName: string, fieldValue: string): string {
    this.fieldName = fieldName
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}

const validationSpy = new ValidationSpy()

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
