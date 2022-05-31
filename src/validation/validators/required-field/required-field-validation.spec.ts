import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '@/validation/errors'
import { faker } from '@faker-js/faker'

const makeSut = (): RequiredFieldValidation =>
  new RequiredFieldValidation(faker.database.column())

describe('RequiredFieldValidation', () => {
  test('should return error if the field is empty', () => {
    const sut = makeSut()
    const error = sut.validate('')
    expect(error).toBeInstanceOf(RequiredFieldError)
  })

  test('should return falsy if the field is not empty', () => {
    const sut = makeSut()
    const error = sut.validate(faker.database.column())
    expect(error).toBeFalsy()
  })
})
