import { ValidationComposite } from '@/validation/validators'
import { ValidationBuilder as Builder } from '@/validation/validators/builder/validation-builder'

import { makeSignUpValidation } from './signup-validation-factory'

describe('LoginValidationFactory', () => {
  test('Should make ValidationComposite with correct validation', () => {
    const composite = makeSignUpValidation()

    expect(composite).toEqual(
      ValidationComposite.build([
        ...Builder.field('name').required().minLength(5).build(),
        ...Builder.field('email').required().email().build(),
        ...Builder.field('password').required().minLength(5).build(),
        ...Builder.field('passwordConfirmation')
          .required()
          .minLength(5)
          .build(),
      ])
    )
  })
})
