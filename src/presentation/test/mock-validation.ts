import { Validation } from '@/presentation/protocols'

export class ValidationStub implements Validation {
  errorMessage: string
  fieldName: string
  input: object

  validate(fieldName: string, input: object): string {
    this.fieldName = fieldName
    this.input = input
    return this.errorMessage
  }
}
