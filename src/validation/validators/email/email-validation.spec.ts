import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'

describe('EmailValidation', () => {
  test('should return error if email is invalid', () => {
    const sut = new EmailValidation('email')
    const error = sut.validate('invalid_email@')
    expect(error).toEqual(new InvalidFieldError())
  })
})
